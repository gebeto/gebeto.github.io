rm -r Packages.bz2
cp Packages Packages1

bzip2 Packages1
mv Packages1.bz2 Packages.bz2
