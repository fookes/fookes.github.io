var i = 0;

function Loaded(){
	document.getElementById("answers").style.display = "none";
	document.getElementById("CVM").style.display = "none";
	document.getElementById("answerImg1").style.display = "none";
}

var questions = [0, "<b>a)</b> Why is the integrity of the source data important in developing a multimedia product?", "<b>a)</b> Describe the difference between linear and non-linear storyboards", "<b>a)</b> Describe how multimedia systems can be used in education and training. Include an example in your answer", "The Cool Video Media (CVM) website allows for the hosting of videos and animations. Anyone may view the videos and animations. To share, submit and post a comment, a user must log in. <br> <b>a)</b> The structure of a multimedia website can be represented as a site map, with labelled boxes representing pages connected by lines representing links. Draw a site map <br> <br> Use the screenshot below of the Cool Video Media website to answer the question", "The Manly Sea Eagles, which is a rugby league club, are investigating ways to improve how club members access game results and statistics during the NRL season. The existing system is paper-based, which results in a time delay between when the results are recorded and when they can be viewed. There is a proposal made to the NRL club to develop a mobile application which would allow club members to login, and view the results and statistics of games. NRL match officials could login to the app and input the results and statistics at the conclusion of each game. The app would transmit the data to the official NRL database and website, which would issue a notification to alert club members that the results are now available. <br> <br> <b>a)</b> Construct a context diagram for the proposed multimedia system", "The Manly Sea Eagles, which is a rugby league club, are investigating ways to improve how club members access game results and statistics during the NRL season. The existing system is paper-based, which results in a time delay between when the results are recorded and when they can be viewed. There is a proposal made to the NRL club to develop a mobile application which would allow club members to login, and view the results and statistics of games. NRL match officials could login to the app and input the results and statistics at the conclusion of each game. The app would transmit the data to the official NRL database and website, which would issue a notification to alert club members that the results are now available. <br> <br> <b>b)</b> Describe how information technology could be used in the proposed multimedia system"];

var answers1 = [0, "<b>Sample Answer:</b> Integrity is important in source data as it is important to acknowledge the source of media and ensure the information provided is reliable and valid.", "<b>Sample Answer:</b> A linear storyboard is one in which each page must be navigated in a linear way. A non-linear storyboard is one of which the user can choose a navigational path based on hyperlinks/hypermedia objects. It gives the end user a number of different possible paths to follow and could use any combination of linear and hierarchical navigational structures.", "<b>Sample Answer:</b> Education and training use multimedia systems to provide the opportunity to learn in new and different ways as they provide a more realistic and immersive environment for individuals. Virtual reality and games can be used in an educational setting to teach a particular concept or to visit a virtual museum in another country, such as the Louvre. Simulations can be used in training scenarios in a more realistic manner, such as the use of simulation to train doctors in surgical techniques, training pilots to fly different aircraft.", "<b>Sample Answer:</b>", "<b>Sample Answer:</b>", "<b>Sample Answer:</b> Information technology includes the hardware and software used within an information system. <br> <br> <b>Hardware:</b> Smartphone - the mobile device is used by the NRL official to input game results into the mobile app. Web / DBMS Server - the hardware on which the association database/website resides and is accessed by end users. Display Device - the hardware used by the end user to view the website, for example a mobile device. Communications Hardware - mobile phone towers, modems, routers. <br> <br> <b>Software:</b> Application Software - the mobile app deployed via the official’s smartphone to update results at the conclusion of each game. Web Browser - that allows end users to access the association website. Database Management Software - used for storage/retrieval and analysis."];

var marks = [0, "(2 Marks)", "(2 Marks)", "(3 Marks)", "(4 Marks)", "(2 Marks)", "(3 Marks)"];

var sources = [0, "CriteriaImg/Criteria_Q1.png", "CriteriaImg/Criteria_Q2.png", "CriteriaImg/Criteria_Q3.png", "CriteriaImg/Criteria_Q4.png", "CriteriaImg/Criteria_Q5a.png", "CriteriaImg/Criteria_Q5b.png"]

var OneDone = false;

function ChangeQuestion() {
	
	if(Confirmed == true){
		if(i >= 0 && i <= 5){
			i += 1;
		}
	
		console.log(i);

		if(i <= 4 && i >= 1){
			document.getElementById("QuestionNum").innerHTML = "Question " + i.toString() + ":";
			document.getElementById("QuestionTxt").innerHTML = questions[i];
			document.getElementById("MarksTxt").innerHTML = marks[i];
			document.getElementById("Criteria").src = sources[i];
			document.getElementById("answerTxt1").innerHTML = answers1[i];
			document.getElementById("TwoPart").innerHTML = "";
		}
		else if(i == 5){
			document.getElementById("QuestionNum").innerHTML = "Question 5a";
			document.getElementById("QuestionTxt").innerHTML = questions[i];
			document.getElementById("MarksTxt").innerHTML = marks[i];
			document.getElementById("Criteria").src = sources[i];
			document.getElementById("answerTxt1").innerHTML = answers1[i];
			document.getElementById("TwoPart").innerHTML = "";
			
			document.getElementById("answerImg1").src = "Resources/IPTDiagram.jpg";
			document.getElementById("answerImg1").style.display = "block";
		}
		else if(i == 6){
			document.getElementById("QuestionNum").innerHTML = "Question 5b";
			document.getElementById("QuestionTxt").innerHTML = questions[i];
			document.getElementById("MarksTxt").innerHTML = marks[i];
			document.getElementById("Criteria").src = sources[i];
			document.getElementById("answerTxt1").innerHTML = answers1[i];
			document.getElementById("TwoPart").innerHTML = "";
		}
		
		if(i == 4){
			document.getElementById("CVM").src = "Resources/CVM_IMAGE.jpg";
			document.getElementById("CVM").style.display = "block";
			document.getElementById("answerImg1").src = "Resources/DIAGRAM.jpg";
			document.getElementById("answerImg1").style.display = "block";
		}
		else if(i != 4){
			document.getElementById("CVM").style.display = "none";
		}
		
		if(i != 5 && i != 4){
			document.getElementById("answerImg1").style.display = "none";
		}
	}
	else if(Confirmed == false){
		alert("No Password Entered");
	}
}


var questions2 = [0, 1, 2, 3, 4, 5, 6];

var answers2 = [0, "Answer 1", "Answer 2", "Answer 3", "Answer 4", "Answer 5a", "Answer 5b"];

var marks2 = [0, "(2 Marks)", "(2 Marks)", "(3 Marks)", "(4 Marks)", "(2 Marks)", "(3 Marks)"];

function PreviousQuestion() {
	
	if(i >= 2){
		i -= 1;
	
	
		if(i <= 4 && i >= 1){
			document.getElementById("QuestionNum").innerHTML = "Question " + i.toString() + ":";
			document.getElementById("QuestionTxt").innerHTML = questions[i];
			document.getElementById("MarksTxt").innerHTML = marks[i];
			document.getElementById("Criteria").src = sources[i];
			document.getElementById("answerTxt1").innerHTML = answers1[i];
			document.getElementById("TwoPart").innerHTML = "";
		} 
		else if(i == 5){
			document.getElementById("QuestionNum").innerHTML = "Question 5a";
			document.getElementById("QuestionTxt").innerHTML = questions[i];
			document.getElementById("MarksTxt").innerHTML = marks[i];
			document.getElementById("Criteria").src = sources[i];
			document.getElementById("answerTxt1").innerHTML = answers1[i];
			document.getElementById("TwoPart").innerHTML = "";
			
			document.getElementById("answerImg1").src = "Resources/IPTDiagram.jpg";
			document.getElementById("answerImg1").style.display = "block";
		}
		
		if(i == 4){
			document.getElementById("CVM").src = "Resources/CVM_IMAGE.jpg";
			document.getElementById("CVM").style.display = "block";
			document.getElementById("answerImg1").src = "Resources/DIAGRAM.jpg";
			document.getElementById("answerImg1").style.display = "block";
		}
		else if(i != 4){
			document.getElementById("CVM").style.display = "none";
		}
		
		if(i != 5 && i != 4){
			document.getElementById("answerImg1").style.display = "none";
		}
	}
}

var Confirmed = false;

function EnterPassword(){
	
	
	var ValidPassword = "TonyShen";
	var pass = prompt("Please enter password: ");
	
	if(pass == ValidPassword){
		document.getElementById("answers").style.display = "block";
		Confirmed = true;
		ChangeQuestion();
	}
	else if(pass != ValidPassword){
		//Try Again
		alert("Invalid Password");
	}
	

}
