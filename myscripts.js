var i = 1;

var Popped = 1;

function LastQuestion() {
	
	var popup = document.getElementById("myPopup");
	
	if(Popped == 1) {
  		popup.classList.toggle("show");
  		Popped = 2;
	}
	else if(Popped == 2){
  		popup.classList.toggle("show");
  		Popped = 0;
	}
  
}

var questions = [0, 1, 2, "For each of the people in question 2, <u>explain</u> what their role is and also <u>explain</u> 1 major ethical consideration they may have in their role.", "<u>Describe</u> an advancement in multimedia systems which you believe will become more common in the near future.", "From question 4, <u>analyse</u> your chosen advancement and its potential ethical considerations this technology will bring. <u>Analyse</u> the ethical impacts on society and the industry/people who develop multimedia systems.", "From question 4, <u>explain</u> how hardware will need to change to support/enable this new development. <u>Give technical detail.</u>", "Facebook are developing a virtual reality headset called Occulus Rift. <u>Describe</u> what Occulus Rift is and <u>outline</u> its purpose."];

var answers1 = [0, 1, 2, "Answer 3", "<b>Multimedia systems</b> are beginning to know more and more about their users and because of this, systems are more tailored to the user and therefore users do not require much interaction with the system. I believe not too far into the future multimedia systems will know enough about us using AI that we will eventually not have to tell it what to do, but rather the system will already have a suggestion of what it believes we will want to do, this will even further reduce the amount of interaction we have with multimedia systems.", "Answer 5", "Answer 6", "Answer 7"];

var marks = [0, 1, 2, "(4 Marks)", "(2 Marks)", "(5 Marks)", "(4 Marks)", "(3 Marks)"];

function ChangeQuestion() {
	
	if(i >= 1 && i <= 9){
		i += 1;
	}
	
	console.log(i);
	
	if(i == 2){
		document.getElementById("QuestionNum").innerHTML = "Question 2:";
		document.getElementById("AnswerNum").innerHTML = "Answer " + i.toString() + ":";
		document.getElementById("QuestionTxt").innerHTML = "For the multimedia system Lynda, <u>list 2 people</u> (their roles) that would be involved in:"
		document.getElementById("MarksTxt").innerHTML = "(2 Marks)";
		document.getElementById("answerImage2").src = "MediaStuff/Videos/Q2/Question2_Image.jpg";
		document.getElementById("answerImage2").style.display = "block";
		document.getElementById("answerTxt1").innerHTML = "";
		document.getElementById("TwoPart").innerHTML = "";
	}
	else if(i == 3){
			document.getElementById("MyVideo").style.display = "block";
			document.getElementById("QuestionNum").innerHTML = "Question " + i.toString() + ":";
			document.getElementById("AnswerNum").innerHTML = "Answer " + i.toString() + ":";
			document.getElementById("QuestionTxt").innerHTML = questions[i];
			document.getElementById("MarksTxt").innerHTML = marks[i];
			document.getElementById("answerTxt1").innerHTML = "";
			LoadVideo();
			document.getElementById("TwoPart").innerHTML = "";
	}
	else if(i == 4){
			document.getElementById("QuestionNum").innerHTML = "Question " + i.toString() + ":";
			document.getElementById("AnswerNum").innerHTML = "Answer " + i.toString() + ":";
			document.getElementById("QuestionTxt").innerHTML = questions2[i];
			document.getElementById("MarksTxt").innerHTML = marks2[i];
			document.getElementById("answerTxt1").innerHTML = "";
			document.getElementById("TwoPart").innerHTML = "";
			document.getElementById("answerImage2").src = "MediaStuff/Videos/Q4/Question4_Image.jpg";
			document.getElementById("answerImage2").style.display = "block";
	}
	else if(i == 5){
			document.getElementById("MyVideo").style.display = "block";
			document.getElementById("QuestionNum").innerHTML = "Question " + i.toString() + ":";
			document.getElementById("AnswerNum").innerHTML = "Answer " + i.toString() + ":";
			document.getElementById("QuestionTxt").innerHTML = questions[i];
			document.getElementById("MarksTxt").innerHTML = marks[i];
			document.getElementById("answerTxt1").innerHTML = "";
			LoadVideo();
			document.getElementById("TwoPart").innerHTML = "";
	}
	else if(i == 6){
			document.getElementById("MyVideo").style.display = "block";
			document.getElementById("QuestionNum").innerHTML = "Question " + i.toString() + ":";
			document.getElementById("AnswerNum").innerHTML = "Answer " + i.toString() + ":";
			document.getElementById("QuestionTxt").innerHTML = questions[i];
			document.getElementById("MarksTxt").innerHTML = marks[i];
			document.getElementById("answerTxt1").innerHTML = "";
			LoadVideo();
			document.getElementById("TwoPart").innerHTML = "";
	}
	else if(i == 7){
			document.getElementById("QuestionNum").innerHTML = "Question " + i.toString() + ":";
			document.getElementById("AnswerNum").innerHTML = "Answer " + i.toString() + ":";
			document.getElementById("QuestionTxt").innerHTML = questions2[i];
			document.getElementById("MarksTxt").innerHTML = marks2[i];
			document.getElementById("answerTxt1").innerHTML = "";
			document.getElementById("TwoPart").innerHTML = "";
			document.getElementById("answerImage2").src = "MediaStuff/Videos/Q7/Question7_Image.jpg";
			document.getElementById("answerImage2").style.display = "block";
	}
	else if(i == 8 ){
		document.getElementById("MyVideo").style.display = "block";
		document.getElementById("QuestionNum").innerHTML = "Question 8a:";
		document.getElementById("AnswerNum").innerHTML = "Answer 8a:";
		document.getElementById("QuestionTxt").innerHTML = "<u>Explain</u> how Occulus Rift could be used in the future in the below fields and <u>discuss</u> the potential benefits and issues in each area:"
		document.getElementById("MarksTxt").innerHTML = "";
		document.getElementById("answerTxt1").innerHTML = "";
		LoadVideo();
		document.getElementById("TwoPart").innerHTML = "<b>a)</b> education (4 Marks)";
	}
	else if(i == 9 ){
		document.getElementById("MyVideo").style.display = "block";
		document.getElementById("QuestionNum").innerHTML = "Question 8b:";
		document.getElementById("AnswerNum").innerHTML = "Answer 8b:";
		document.getElementById("QuestionTxt").innerHTML = "<u>Explain</u> how Occulus Rift could be used in the future in the below fields and <u>discuss</u> the potential benefits and issues in each area:"
		document.getElementById("MarksTxt").innerHTML = "";
		document.getElementById("answerTxt1").innerHTML = "";
		LoadVideo();
		document.getElementById("TwoPart").innerHTML = "<b>b)</b> medicine (4 Marks";
	}
	else if(i == 10 ){
		document.getElementById("QuestionNum").innerHTML = "Question 8c:";
		document.getElementById("AnswerNum").innerHTML = "Answer 8c:";
		document.getElementById("QuestionTxt").innerHTML = "<u>Explain</u> how Occulus Rift could be used in the future in the below fields and <u>discuss</u> the potential benefits and issues in each area:"
		document.getElementById("MarksTxt").innerHTML = "";
		document.getElementById("answerTxt1").innerHTML = "";
		LoadVideo();
		document.getElementById("TwoPart").innerHTML = "<b>c)</b> politics (4 Marks)";
		LastQuestion();
	}
	else if(Popped == 2){
		LastQuestion();
	}
	
	if(i != 1 && i != 3 && i != 5 && i != 6 && i != 8 && i != 9 && i != 10){
		document.getElementById("MyVideo").style.display = "none";
		x.pause();
	}
	
	if(i != 2 && i != 4 && i != 7){
		document.getElementById("answerImage2").style.display = "none";
	}

}

var x = document.createElement("VIDEO");

function LoadVideo() {		
	if (x.canPlayType("video/mp4")) {
		if(i == 1){
			x.setAttribute("src","MediaStuff/Videos/Q1/Question1_Video.mp4");
		}
		else if(i == 3){
			x.setAttribute("src","MediaStuff/Videos/Q3/Question3_Video.mp4");
		}
		else if(i == 5){
			x.setAttribute("src","MediaStuff/Videos/Q5/Question5_Video.mov");
		}
		else if(i == 6){
			x.setAttribute("src","MediaStuff/Videos/Q6/Question6_Video.mp4");
		}
		else if(i == 8){
			x.setAttribute("src","MediaStuff/Videos/Q8/Question8a_Video.mp4");
		}
		else if(i == 9){
			x.setAttribute("src","MediaStuff/Videos/Q8/Question8b_Video.mp4");
		}
		else if(i == 10){
			x.setAttribute("src","MediaStuff/Videos/Q8/Question8c_Video.mp4");
		}
		x.setAttribute("width", "640");
		x.setAttribute("height", "320");
		x.setAttribute("controls", "controls");
		document.getElementById("MyVideo").appendChild(x);
	}
	else{
		if(i == 1){
			x.setAttribute("src","MediaStuff/Videos/Q1/Question1_Video.mp4");
		}
		else if(i == 3){
			x.setAttribute("src","MediaStuff/Videos/Q3/Question3_Video.mp4");
		}
		else if(i == 5){
			x.setAttribute("src","MediaStuff/Videos/Q5/Question5_Video.mov");
		}
		else if(i == 6){
			x.setAttribute("src","MediaStuff/Videos/Q6/Question6_Video.mp4");
		}
		else if(i == 8){
			x.setAttribute("src","MediaStuff/Videos/Q8/Question8a_Video.mp4");
		}
		else if(i == 9){
			x.setAttribute("src","MediaStuff/Videos/Q8/Question8b_Video.mp4");
		}
		else if(i == 10){
			x.setAttribute("src","MediaStuff/Videos/Q8/Question8c_Video.mp4");
		}
	}
}

function Loaded(){
	LoadVideo();
	document.getElementById("answerImage2").style.display = "none";
}

var questions2 = [0, "For the multimedia system Lynda, give an <u>outline of what it is</u>, its purpose and how it can be defined as a multimedia system.", 2, "For each of the people in question 2, <u>explain</u> what their role is and also <u>explain</u> 1 major ethical consideration they may have in their role.", "<u>Describe</u> an advancement in multimedia systems which you believe will become more common in the near future.", "From question 4, <u>analyse</u> your chosen advancement and its potential ethical considerations this technology will bring. <u>Analyse</u> the ethical impacts on society and the industry/people who develop multimedia systems.", "From question 4, <u>explain</u> how hardware will need to change to support/enable this new development. <u>Give technical detail</u>.", "Facebook are developing a virtual reality headset called Occulus Rift. <u>Describe</u> what Occulus Rift is and <u>outline</u> its purpose."];

var answers2 = [0, 1, 2, "Answer 3", "<b>Multimedia systems</b> are beginning to know more and more about their users and because of this, systems are more tailored to the user and therefore users do not require much interaction with the system. I believe not too far into the future multimedia systems will know enough about us using AI that we will eventually not have to tell it what to do, but rather the system will already have a suggestion of what it believes we will want to do, this will even further reduce the amount of interaction we have with multimedia systems.", "Answer 5", "Answer 6", "Answer 7"];

var marks2 = [0, "(3 Marks)", 2, "(4 Marks)", "(2 Marks)", "(5 Marks)", "(4 Marks)", "(3 Marks)"];

function PreviousQuestion() {
	
	if(i >= 2){
		i -= 1;
	
	
		if(i == 1){
			document.getElementById("MyVideo").style.display = "block";
			document.getElementById("QuestionNum").innerHTML = "Question " + i.toString() + ":";
			document.getElementById("AnswerNum").innerHTML = "Answer " + i.toString() + ":";
			document.getElementById("QuestionTxt").innerHTML = questions2[i];
			document.getElementById("MarksTxt").innerHTML = marks2[i];
			document.getElementById("answerTxt1").innerHTML = "";
			LoadVideo();
			document.getElementById("TwoPart").innerHTML = "";
		}
		else if(i == 2){
			document.getElementById("QuestionNum").innerHTML = "Question 2:";
			document.getElementById("AnswerNum").innerHTML = "Answer " + i.toString() + ":";
			document.getElementById("QuestionTxt").innerHTML = "For the multimedia system Lynda, <u>list 2 people</u> (their roles) that would be involved in:"
			document.getElementById("MarksTxt").innerHTML = "(2 Marks)";
			document.getElementById("answerImage2").src = "MediaStuff/Videos/Q2/Question2_Image.jpg";
			document.getElementById("answerImage2").style.display = "block";
			document.getElementById("answerTxt1").innerHTML = "";
			document.getElementById("TwoPart").innerHTML = "";
		}
		else if(i == 3){
			document.getElementById("MyVideo").style.display = "block";
			document.getElementById("QuestionNum").innerHTML = "Question " + i.toString() + ":";
			document.getElementById("AnswerNum").innerHTML = "Answer " + i.toString() + ":";
			document.getElementById("QuestionTxt").innerHTML = questions2[i];
			document.getElementById("MarksTxt").innerHTML = marks2[i];
			document.getElementById("answerTxt1").innerHTML = "";
			LoadVideo();
			document.getElementById("TwoPart").innerHTML = "";
		}
		else if(i == 4){
			document.getElementById("QuestionNum").innerHTML = "Question " + i.toString() + ":";
			document.getElementById("AnswerNum").innerHTML = "Answer " + i.toString() + ":";
			document.getElementById("QuestionTxt").innerHTML = questions2[i];
			document.getElementById("MarksTxt").innerHTML = marks2[i];
			document.getElementById("answerTxt1").innerHTML = "";
			document.getElementById("TwoPart").innerHTML = "";
			document.getElementById("answerImage2").src = "MediaStuff/Videos/Q4/Question4_Image.jpg";
			document.getElementById("answerImage2").style.display = "block";
		}
		else if(i == 5){
			document.getElementById("MyVideo").style.display = "block";
			document.getElementById("QuestionNum").innerHTML = "Question " + i.toString() + ":";
			document.getElementById("AnswerNum").innerHTML = "Answer " + i.toString() + ":";
			document.getElementById("QuestionTxt").innerHTML = questions2[i];
			document.getElementById("MarksTxt").innerHTML = marks2[i];
			document.getElementById("answerTxt1").innerHTML = "";
			LoadVideo();
			document.getElementById("TwoPart").innerHTML = "";
		}
		else if(i == 6){
			document.getElementById("MyVideo").style.display = "block";
			document.getElementById("QuestionNum").innerHTML = "Question " + i.toString() + ":";
			document.getElementById("AnswerNum").innerHTML = "Answer " + i.toString() + ":";
			document.getElementById("QuestionTxt").innerHTML = questions[i];
			document.getElementById("MarksTxt").innerHTML = marks[i];
			document.getElementById("answerTxt1").innerHTML = "";
			LoadVideo();
			document.getElementById("TwoPart").innerHTML = "";
		}
		else if(i == 7){
			document.getElementById("QuestionNum").innerHTML = "Question " + i.toString() + ":";
			document.getElementById("AnswerNum").innerHTML = "Answer " + i.toString() + ":";
			document.getElementById("QuestionTxt").innerHTML = questions2[i];
			document.getElementById("MarksTxt").innerHTML = marks2[i];
			document.getElementById("answerTxt1").innerHTML = "";
			document.getElementById("TwoPart").innerHTML = "";
			document.getElementById("answerImage2").src = "MediaStuff/Videos/Q7/Question7_Image.jpg";
			document.getElementById("answerImage2").style.display = "block";
		}
		else if(i == 8 ){
			document.getElementById("MyVideo").style.display = "block";
			document.getElementById("QuestionNum").innerHTML = "Question 8a:";
			document.getElementById("AnswerNum").innerHTML = "Answer 8a:";
			document.getElementById("QuestionTxt").innerHTML = "<u>Explain</u> how Occulus Rift could be used in the future in the below fields and <u>discuss</u> the potential benefits and issues in each area:"
			document.getElementById("MarksTxt").innerHTML = "";
			document.getElementById("answerTxt1").innerHTML = "";
			LoadVideo();
			document.getElementById("TwoPart").innerHTML = "<b>a)</b> education (4 Marks)";
		}
		else if(i == 9 ){
			document.getElementById("MyVideo").style.display = "block";
			document.getElementById("QuestionNum").innerHTML = "Question 8b:";
			document.getElementById("AnswerNum").innerHTML = "Answer 8b:";
			document.getElementById("QuestionTxt").innerHTML = "<u>Explain</u> how Occulus Rift could be used in the future in the below fields and <u>discuss</u> the potential benefits and issues in each area:"
			document.getElementById("MarksTxt").innerHTML = "";
			document.getElementById("answerTxt1").innerHTML = "";
			LoadVideo();
			document.getElementById("TwoPart").innerHTML = "<b>b)</b> medicine (4 Marks";
		}
		if(i != 1 && i != 3 && i != 5 && i != 6 && i != 8 && i != 9 && i != 10){
			document.getElementById("MyVideo").style.display = "none";
			x.pause();
		}
		
		if(i != 2 && i != 4 && i != 7){
			document.getElementById("answerImage2").style.display = "none";
		}

		if(Popped == 2){
			LastQuestion();
		}
	}
}

