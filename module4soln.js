var names=new Array();
names[0]="Yana";
names[1]="Jayesh";
names[2]="Jay";
names[3]="jainam";
names[4]="parth";
names[5]="shubham";
names[6]="luv";
names[7]="pratap";
names[8]="lakshita";
names[9]="jemin";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}