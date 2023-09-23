          // chatbot section and functionality
          const enterMe = document.getElementById("enter");
    var botChats = document.getElementById("chatbottext");
    let clickOnMe = document.getElementById("lets_chat");
    let endChat = document.getElementById("end");
    let chatBox = document.getElementById("chatbox");
    clickOnMe.onclick = ()=>{
     if(chatBox.style.display == "none"){
         chatBox.style.display = "block";
         clickOnMe.style.display = "none";
     }
     else{
         clickOnMe.style.display = "block";
         chatBox.style.display = "none";
  
     }
 };
    endChat.onclick = ()=>{
     if(chatBox.style.display == "block"){
         chatBox.style.display = "none";
         clickOnMe.style.display = "block";
         botChats.innerHTML = "";
     }
     else{
         chatBox.style.display = "block";
         clickOnMe.style.display = "none";
     
     }
    }
    

  var textbox = document.getElementById("textbox");
  var bot_texts = document.getElementById("chatbottext");
  var time = new Date().toLocaleString({}, {hour:"2-digit",minute:"2-digit"});
  
  textbox.addEventListener("keydown", (e)=>{  
     if(e.code == "Enter"){
    bot_texts.innerHTML = ` ${textbox.value}<br>${ time}` + "<br>";
    bot_texts.style.color = "crimson";
     bot_texts.style.float = "right";
    let input = textbox.value;
    textbox.value = ""; 
     setTimeout(() => {
         if(input in bot$Me){
         bot_texts.innerHTML = ` ${bot$Me[input]}<br>${ time}` + "<br>";
         bot_texts.style.float = "left";
         bot_texts.style.color = "green";
         bot_texts.scrollIntoView({behavior:"auto"});
         
     }
 
     else{
         bot_texts.innerHTML = `please try asking something else ${time}`; 
         bot_texts.style.float = "left";
         bot_texts.style.color = "green";
         bot_texts.scrollIntoView({behavior:"auto"});
         
     }         
     }, 3500);
        
 }  
 
});
enterMe.addEventListener("click", ()=>{  

    bot_texts.innerHTML = ` ${textbox.value}<br>${ time}` + "<br>";
    bot_texts.style.color = "crimson";
     bot_texts.style.float = "right";
    let input = textbox.value;
    textbox.value = ""; 
     setTimeout(() => {
         if(input in bot$Me){
         bot_texts.innerHTML = ` ${bot$Me[input]}<br>${ time}` + "<br>";
         bot_texts.style.float = "left";
         bot_texts.style.color = "green";
         bot_texts.scrollIntoView({behavior:"auto"});
         
     }
 
     else{
         bot_texts.innerHTML = `please try asking something else ${time}`; 
         bot_texts.style.float = "left";
         bot_texts.style.color = "green";
         bot_texts.scrollIntoView({behavior:"auto"});
         
     }         
     }, 3500);
        
 });
    

        var bot$Me = {
         "see you later": "Great! bye",
         "how are you doing?":"wonderful and you friend?",
         "how old are you?": "I'm ageless!",
         "are you wise?": "I'm not solomon! but ask your question",
         "bye":"See you next time",
         "hi": "Hey buddy!",
         "idiot!":"What!?",
         "ok":"Good!",
         "Whats up?":"Great!",
         "What's up?":"Wonderful and you?",
         "Wow!":"Yea, thats the spirit!",
         "Wow":"Yoo!",
         "Can you help me?": "Sure, i can!",
         "Why?":"I'm working with time",
         "Lol":"smiles...",
         "Lol!":"yep!",
         "Great!": "Yeah!",
         "Friend": "Hey",
         "Do you know raymond?":"Yah, i do and what about him?",
         "Do you know raymond":"Yah, i do and what about him?",
         "Who is mr raymond?":"Yah, his is from Nigeria and what about him?",
         "Who is God?":"He is the creator of infinite",
         "Tell me about him":"I work with time please, check out his profile or ask me something different or click EndChat button!",
         "Thank you!":"you are welcome!",
         "Who are you?":"i'm your assistant",
         "Tell me about you": "i'm mr. chatbot!",
         "Who created you?": "Funny question!",
         "Can you add 2 plus 3?": "sure!",
         "What is 2+10?": "12!",
         "Gotta go":"ok, bye!",
         "Who is the president of USA?":"As @ May 20th 2023, it was Joe Biden: maybe he is now",
         "Who is the president of usa":"As @ May 20th 2023, it was Joe Biden: maybe he is now",
         "Who is the president of America?":"As @ May 20th 2023, it was Joe Biden: maybe he is now",
         "Who is the president of america":"As @ May 20th 2023, it was Joe Biden: maybe he is now",
         "Are you married?":"Talk to me seriously",
         "What are you doing now?":"im with you",
         "What's going on?":"nothing buddy",
         "Whats happening?":"nothing buddy",
         "Whats going on?":"nothing buddy",
         "What's up?":"nothing buddy",
         "Whats going on?":"nothing yeah",
         "Whats your name?": "i'm infinite",
         "What's your name?":"i'm infinite",
         "Bye":"yeah, nice talking to you!",
         "How are you?":"fine and you?",
         "I have a problem":"i can help",
         "What is your name?":"i'm infinite",
        
         "hello":"Hi, welcome to my world!",
         "Hello": "HI",
         "yeah":"How may i help?",
         "Yeah": "How can i help?",
         "hey":"Hello!",
         "Hey":"Hi",
         "you there?": "Yep",
         "Are you there?": "yea dude!",
         "Are you God?": "Is this a joke? I'm infinite but not God!",
         "See you later": "Great! bye",
         "How are you doing?":"wonderful and you friend?",
         "How old are you?": "I'm ageless!",
         "Are you wise?": "I'm not solomon! but ask your question",
         "Bye":"See you next time",
         "Hi": "Hey buddy!",
         "Idiot!":"What!?",
         "Ok":"Good!",
         "whats up?":"Great!",
         "what's up?":"Wonderful and you?",
         "wow!":"Yea, thats the spirit!",
         "wow":"Yoo!",
         "can you help me?": "Sure, i can!",
         "why?":"I'm working with time",
         "lol":"smiles...",
         "lol!":"yep!",
         "great!": "Yeah!",
         "friend": "Hey",
         "do you know raymond?":"Yah, i do and what about him?",
         "do you know raymond":"Yah, i do and what about him?",
         "who is mr raymond?":"Yah, his is from Nigeria and what about him?",
         "who is God?":"He is the creator of infinite",
         "tell me about him":"I work with time please, check out his profile or ask me something different or click EndChat button!",
         "thank you!":"you are welcome!",
         "who are you?":"i'm your assistant",
         "tell me about you": "i'm mr. chatbot!",
         "who created you?": "Funny question!",
         "can you add 2 plus 3?": "sure!",
         "what is 2+10?": "12!",
         "gotta go":"ok, bye!",
         "who is the president of USA?":"As @ May 20th 2023, it was Joe Biden: maybe he is now",
         "who is the president of usa":"As @ May 20th 2023, it was Joe Biden: maybe he is now",
         "who is the president of America?":"As @ May 20th 2023, it was Joe Biden: maybe he is now",
         "who is the president of america":"As @ May 20th 2023, it was Joe Biden: maybe he is now",
         "are you married?":"Talk to me seriously",
         "what are you doing now?":"im with you",
         "what's going on?":"nothing buddy",
         "whats happening?":"nothing buddy",
         "whats going on?":"nothing buddy",
         "what's up?":"nothing buddy",
         "whats going on?":"nothing yeah",
         "whats your name?": "i'm infinite",
         "what's your name?":"i'm infinite",
         "bye":"yeah, nice talking to you!",
         "how are you?":"fine and you?",
         "i have a problem":"i can help",
         "what is your name?":"i'm infinite",
         "": "i don't understand!, type in something",
         "who is raymond?":"he is a full stack dev!",
         "do you know him?":"pretty well",
         "where did he learn web development?":"check out his portfolio",
         "how old is ogaraga":"Raymond is great",
         "is he employed?":"check his profile",
         "where did he graduate from?":"mouau",
         "who is the founder of google?":"page larry",
         "who created javascript?":"Brendan Eich",
         "what's that?":"never mind",
         "good!":"Thanks!",
         "good":"thank you!",
         "ok then":"yep, then!",
         "ok no problem":"yea buddy!",
         "have a nice day":"same here",
         "do have a great day":"great, same to you buddy!",
         "talk to you later":"ok, bye",
         "bye":"enjoy yourself buddy!",
         "can i ask you a question?": "please do",
         "tell me about football": "soccer started in 1936 or thereabout in greece",
         "who is the best player in the world?": "he is late!",
         "what is his name?": "who?",
         "What?":"I don't understand!",
         "Who are you?": "I'm infinite!",
         "What is infinite?": "I,m ageless, sort of cyborg!",
         "Where are you now?":"I'm always around in the cloud!",
         "The best player in the world": "i already told you!",
         "Where are you from?": "i'm always around in the cloud",
         "How can i learn coding?":"it is simple! just contact:port-ogaraga.vercel.app/home.html!",
         "Cost of learning programming?":"it depends on your desire and scope of what you want",
     };
 

    