'''
colors = [
	"#012459",
	"#003972",
	"#003972",
	"#004372",
	"#004372",
	"#016792",
	"#07729f",
	"#12a1c0",
	"#74d4cc",
	"#efeebc",
	"#fee154",
	"#fdc352",
	"#ffac6f",
	"#fda65a",
	"#fd9e58",
	"#f18448",
	"#f06b7e",
	"#ca5a92",
	"#5b2c83",
	"#371a79",
	"#28166b",
	"#192861",
	"#040b3c",
	"#040b3c",
]
'''
colors = [
	"#001322",
	"#001322",
	"#001322",
	"#00182b",
	"#011d34",
	"#00182b",
	"#042c47",
	"#07506e",
	"#1386a6",
	"#61d0cf",
	"#a3dec6",
	"#e8ed92",
	"#ffe467",
	"#ffe467",
	"#ffe467",
	"#ffd364",
	"#f9a856",
	"#f4896b",
	"#d1628b",
	"#713684",
	"#45217c",
	"#372074",
	"#233072",
	"#012459",
]

def hexToRgb(strHex):
	strHex = strHex[1:]
	values = [];	

	for i in range(3):
		values.append(str(list(strHex)[i*2]) + str(list(strHex)[(i*2)+1]))

	values = [int(i,16) for i in values]

	print("[" + str(values[0]) + ", " + str(values[1]) + ", " + str(values[2]) + "],")

[hexToRgb(color) for color in colors]
