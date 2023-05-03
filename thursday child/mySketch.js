var inputElement, inputElement2,colorPicker
var randomValue=0//預設值為0，第一次按下按鈕，值就會變成10。第二次按，回到0。
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	inputElement =createInput("Thursday's Child💔")
	inputElement.position(50,50)
	
	sliderElement= createSlider(10,100,30,1)//最小值，最大值，預設值，間距
	sliderElement.position(500,50)
	
	btnElement =createButton("TXT")
	btnElement.position(400,50)
	btnElement.mousePressed(goCrazy)
	
	colorPicker = createColorPicker('#e63946')
	colorPicker.position(700,50)
}

function goCrazy() {
 if(randomValue>0){
	 randomValue=0
 }
	else
	{
		randomValue=10
	}
}

function draw() {
	background("#fefae0");
	var txts = inputElement.value();//輸入文字
	fill(colorPicker.value())
	//fill("#e63946")
	//fill("#cb997e")
	textSize(sliderElement.value())
	textStyle(BOLD)//粗體
	var txtLength=textWidth(txts)+30
	var textHeight=sliderElement.value()+30
	for (var y=0;y<height;y=y+textHeight){
		push()
		if(int(y/textHeight)%2==0){//算行數
			fill(colorPicker.value())//偶數行
			translate(-50,0)
		}
		else{
		fill(0)//奇數行
		}
			for(var x=0;x<width;x=x+txtLength){//做一排重複文字
				text(txts,x+random(-randomValue,randomValue),y)
			}
		pop()
	}
}