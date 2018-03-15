mkdir -p debs
pkgs=`ls pkgs | xargs -n 1 basename`;
for entry in $pkgs
	do echo "$entry";
	`dpkg -b pkgs/$entry debs/$entry.deb`;
done