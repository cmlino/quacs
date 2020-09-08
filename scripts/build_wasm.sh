#!/bin/sh

if test x"$1" == x"debug"; then
	echo "Building debug release"
	FLAGS="-- --features debug"
else
	echo "Building production release"
	FLAGS=""
fi

if test -z "$DONT_BENCHMARK_QUACS"; then
	if test -z "$FLAGS"; then
		FLAGS="--"
	fi

	FLAGS="$FLAGS --features benchmark"
fi

# Update our local dependencies (quacs-rs), or clone if possible
echo Retrieving latest quacs-data
git -C src/store/data pull || git clone https://github.com/quacs/quacs-data src/store/data -b multi-semester

ROOT_DIR=$(pwd)

for dir in $ROOT_DIR/src/store/data/semester_data/*; do
	SEM_NAME=$(basename $dir)
	echo Building $SEM_NAME
	rm -f $ROOT_DIR/src/quacs-rs/src/data
	ln -srf $dir $ROOT_DIR/src/quacs-rs/src/data

	cd $ROOT_DIR/src/quacs-rs/
	wasm-pack build $FLAGS || exit 1

	mkdir -p $ROOT_DIR/src/quacs-rs/built/$SEM_NAME
	mv pkg/* $ROOT_DIR/src/quacs-rs/built/$SEM_NAME
	echo
done

echo -n '[' >$ROOT_DIR/src/store/semesters.json
ls $ROOT_DIR/src/store/data/semester_data | sort -r | xargs | tr -d '\n' | sed 's/ /,/g' >>$ROOT_DIR/src/store/semesters.json
echo ']' >>$ROOT_DIR/src/store/semesters.json
