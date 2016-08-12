import bz2, os, time

Packages = open("Packages").readlines()
print Packages
Packagesbz = bz2.BZ2File("Packages.bz2", "w")
Packagesbz.writelines(Packages)

os.system("git add -A")
os.system("git commit -m 'Update'")
os.system("git push")