import bz2
Packages = open("Packages").readlines()
print Packages
Packagesbz = bz2.BZ2File("Packages.bz2", "w")
Packagesbz.writelines(Packages)