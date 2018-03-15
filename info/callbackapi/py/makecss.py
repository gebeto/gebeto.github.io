import os
import re


def get_all_classes(filename):
	html = open(filename).read()
	classes = html.split("class=\"")[1:]
	res_classes = []
	res_all_classes = []
	for html_class in classes:
		res_classes.append(html_class.split("\"")[0])

	for each in res_classes:
		# for c in each.split(" "):
		for c in re.findall(r"\b[\w_]+\b", each):
			res_all_classes.append("." + c)
			# res_all_classes.append(c)

	return list(set(res_all_classes))


def get_all_styles_by_class(html_class):
	path = "./css/"
	css_files = os.listdir(path)
	res = ""
	for each_file in css_files:
		css = open(path + each_file).read()
		styles = re.findall(html_class + "[\w\W]+?}", css)
		if len(styles) > 0:
			for st in styles:
				st = css.split(st)[0].split("}")[-1] + st
				print st
				res += "\n" + st
	return res

classes = get_all_classes("index.html")
print classes

res = ""
for c in classes:
	res += "\n\n\n" + get_all_styles_by_class(c)

print "\n\n\n", res
open("css.css", "w").write(res)