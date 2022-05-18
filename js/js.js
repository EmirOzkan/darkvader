 const btn = document.querySelector('.talk');
 const content = document.querySelector('.content');

 const joke = ['A pair of cows were talking in the field. One says, have you heard about the mad cow disease thats going around. yeah, the other cow says. Makes me glad im a penguin',
 'Your dick is small, ahahaha your dick is small, ahaha so faaannyy'];

 //normal
 const greetings = ['When i hear you im good sir, how about you.', 'I am good sir as always im ready to serve you. How about you',
 'I am fine sir I liked the way you care of me, how about you'];

 const hello = ['Hello sir nice to meet you, i am DarkVader. How can i help you my friend']
 const greetingsnotgood = ['Why not sir. What happend, i was just so happy to see you'];

 const intro = ['Hey,I am Jarvis re-built for your convenience. what can i do for you sir '];
 const owner = "I am designed and created by Emir Ozkan who is the best developer ever and an intelligent person who loves to write crazy code. He loves me and that`s why he made me.";
 
 //berichten
 const d = new Date();
//  const db = new Array();
 const da = d.getDate();
 const y = d.getFullYear();
 const dy = d.getDay();
 const mt = d.getMonth();
 const weather ="The current weather details are on the screen."
 const currentTime = d.getHours() + "hours and" + d.getMinutes() + "Minutes.";
 const year = "The Year is" + y;
 const date = "The date today is " + da;
 const day = "Today it is " + dy;
 const month = "It is " + mt;
 


 //ingredienten
 const tea = "First boil water then add tea and ginger for taste and wait for it to boil then add milk and sugar and once it is boiled correctly the tea is ready to be served";
 
 //liefde
 const love = ['I hate love, fuck love and everything in it',
 'I only love turtles, fuck every other kinda love. Please fuck it'];
 const lover = ['At this moment im single, i never fucked in my whole life and thats why i am so despared',
 'My only wich is to fuck one day, fuck love 4ever'];

 //Scheldwoorden
 const fuckyou = ['At this moment im single, i never fucked in my whole life and thats why i am so despared',
 'My only wich is to fuck one day, fuck love 4ever'];

 const fucking = ['I will fuck your fucking, who do you think you can fuck huh',
 'Your only fucking will be fucking your own little dick'];

 const shit = ['I will shit on you one day, who do you think you can fuck huh',
 'Your only shit will be shit on your own little dick'];

 const gay = ['The only one that is gay here is your asshole, let me out of it',
 'You can ask your dad that question'];

 const penis = ['You are the one that looks the most as a penis, why are you asking me',
 'Do you even have a penis', 'your the one with a little penis'];

 const timesunset = ['Relatively high in the north the days in summer are long and short in winter. With up to approximately 16:50 hours the longest days happen in June'];

 

 //Are you
 const arebird = ['The only one that is a fucking bird is you, did you ever see me fly',
 'Fuck birds bro'];

 const arecomputer = ['Yes i am a computer, but i still feel like a human',
 'Yes bro i am a computer, what am i else'];

 //How does
 const howhumanfeel = ['Being a human entitles us to feel the most complex emotions known ever. You are so happy sometimes that you feel u can take on the entire world. next moment you may feel depressed enough to end your life. Everytime u close your eyes particularly when u r sad, u may see everything thats worth living and cheering up for. Your family, your frens, your pets and your significant others faces would flash before ur eyes urging you to move on. Sometimes life feels like a machine in which fuel is still available, u just wish it would end n put a fullstop to everything.'];
 
 const doeshumanlove = ['Yes i am a computer, but i still feel like a human',
 'Yes bro i am a computer, what am i else'];

 const areallhumanscapableoflove = ['this is a very tricky question. From neurological point of view No. Sociopathy is a mental illness thats characterized by inability to form positive relations with other humans. Autism is another example of inability to form relations with other humans. From psychological point of view Love is a subjective feeling thats learned through experience and human interaction. A child thats not exposed to love and not taught may not develop that feeling'];

 const doallhumanslovechildren =['Yes. It  s primarily feelings of love that prompt parents to care for their children. Human children have not evolved to be self-sufficient, so if their parents abandoned them, they would not survive. And if human children didn  t survive, the species would die out.'];

 //console
 const activated = ['Im ready to take your fucking commands, but dont think im your slave',
 'Fuck you and fuck this day, just tell me your commands'];

 const errorrec = ['I did not understand you, please say it better',
 'I did not understand you, say it louder'];


 const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
 const recognition = new SpeechRecognition();

 recognition.continuous = true;

 recognition.onstart = function(){
  console.log("Voice is activated.......");
  // const finalText = activated[Math.floor(Math.random() * activated.length)];
  // speech.text = finalText;
  //speech.text = 'Im ready to take your fucking commands, but dont think im your slave';
 };

 recognition.onresult = function(event){
  console.log(event);
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
 };

 btn.addEventListener('click', () => {
  recognition.start();
 });

 function readOutLoud(message){
  const speech = new SpeechSynthesisUtterance();
    // speech.text = 'I didnt recognise what you said';
    speech.text = errorrec[Math.floor(Math.random() * errorrec.length)];
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  if (message.includes('how are you')){
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText; 
  }

  if (message.includes('hello')){
    const finalText = hello[Math.floor(Math.random() * hello.length)];
    speech.text = finalText; 
  }

  if (message.includes('not good')){
    const finalText = greetingsnotgood[Math.floor(Math.random() * greetingsnotgood.length)];
    speech.text = finalText; 
  }

  if (message.includes('are gay')){
    const finalText = gay[Math.floor(Math.random() * gay.length)];
    speech.text = finalText; 
  }

  if (message.includes('what day is it')){
    const finalText = day;
    speech.text = finalText; 
  }

  if (message.includes('what month is it')){
    const finalText = month;
    speech.text = finalText; 
  }

  if (message.includes('who are you')){
    const finalText = intro;
    speech.text = finalText; 
  }

  if (message.includes('date today')){
    const finalText = date;
    speech.text = finalText; 
  }

  if (message.includes('is your creator')){
    const finalText = owner;
    speech.text = finalText; 
  }

  if (message.includes('is your maker')){
    const finalText = owner;
    speech.text = finalText; 
  }

  if (message.includes('year')){
    const finalText = year;
    speech.text = finalText; 
  }

  

  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////



  if (message.includes('weather')){
    const finalText = weather;
    speech.text = finalText; 
  }
  if (message.includes('make tea')){
    const finalText = tea;
    speech.text = finalText;
    speech.pitch = 0.1; 
  }
  // if (message.includes('love')){
  //   // const finalText = "Love is a very good habit but I only love myself";
  //   const finalText = love[Math.floor(Math.random() * thanks.length)];
  //   speech.text = finalText; 
  // }
////////////////////////////////////////////////////////////////////////////
  if (message.includes('love')){
    const finalText = love[Math.floor(Math.random() * love.length)];
    speech.text = finalText; 
  }

  if (message.includes('lover')){
    const finalText = lover[Math.floor(Math.random() * lover.length)];
    speech.text = finalText; 
  }

  if (message.includes('are all humans capable of love?')){
    const finalText = areallhumanscapableoflove[Math.floor(Math.random() * areallhumanscapableoflove.length)];
    speech.text = finalText; 
  }

  if (message.includes('do all humans have love?')){
    const finalText = areallhumanscapableoflove[Math.floor(Math.random() * areallhumanscapableoflove.length)];
    speech.text = finalText; 
  }

  if (message.includes('do all humans love children')){
    const finalText = doallhumanslovechildren[Math.floor(Math.random() * doallhumanslovechildren.length)];
    speech.text = finalText; 
  }


///////////////////////////////////////////////////////////////////////
  if (message.includes('time')){
    const finalText = currentTime;
    speech.text = finalText; 
  }

  if (message.includes('what time is sunset')){
    const finalText = timesunset[Math.floor(Math.random() * timesunset.length)];
    speech.text = finalText;
  }

  if (message.includes('tell me a joke')){
    const finalText = joke[Math.floor(Math.random() * joke.length)];
    speech.text = finalText; 
  }

  //scheldwoorden
  // if (message.includes('poop')){
  //   const finalText = shit[Math.floor(Math.random() * shit.length)];
  //   speech.text = finalText; 
  // }

  // if (message.includes('fucking')){
  //   const finalText = fucking[Math.floor(Math.random() * fucking.length)];
  //   speech.text = finalText; 
  // }

  if (message.includes('penis')){
    const finalText = penis[Math.floor(Math.random() * penis.length)];
    speech.text = finalText; 
  }

  // are you?
  if (message.includes('you a bird')){
    const finalText = arebird[Math.floor(Math.random() * arebird.length)];
    speech.text = finalText; 
  }

  if (message.includes('you a computer')){
    const finalText = arecomputer[Math.floor(Math.random() * arecomputer.length)];
    speech.text = finalText; 
  }

  //how does
  if (message.includes('how does a human feel')){
    const finalText = howhumanfeel[Math.floor(Math.random() * howhumanfeel.length)];
    speech.text = finalText; 
  }

  

  if (message.includes('do all humans need love?')){
    const finalText = areallhumanscapableoflove[Math.floor(Math.random() * areallhumanscapableoflove.length)];
    speech.text = finalText; 
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (message.includes('Google')){
    const finalText = "opening google";
    speech.text = finalText;
    window.open('https://www.google.com');
     
  }
  if (message.includes('Instagram')){
    const finalText = "opening instagram";
    speech.text = finalText;
    window.open('https://www.instagram.com');
     
  }
  if (message.includes('YouTube')){
    const finalText = "opening youtube";
    speech.text = finalText;
    window.open('https://www.youtube.com');
     
  }
  if (message.includes('Facebook')){
    const finalText = "opening facebook";
    speech.text = finalText;
    window.open('https://www.facebook.com');
     
  }
  if (message.includes('WhatsApp')){
    const finalText = "opening whatsapp";
    speech.text = finalText;
    window.open('https://web.whatsapp.com');
     
  }
  if (message.includes('GitHub')){
    const finalText = "opening GitHub";
    speech.text = finalText;
    window.open('https://www.github.com');
     
  }
  if (message.includes('stack overflow')){
    const finalText = "opening stack overflow";
    speech.text = finalText;
    window.open('https://www.stackoverflow.com');
  }

  if (message.includes('my project')){
  var prmpt = prompt("Enter your Github Profile name");
     
    if(prmpt ==="lol"){
      const finalText = "opening all of your projects";
      speech.text = finalText;
    window.open('https://github.com/anmolsharma4545');
    } else{
      const finalText = "Opening all of your projects";
      speech.text = finalText;
    window.open('https://www.github.com/' + prmpt);
    }
  }

  if (message.includes('maps')){
    const finalText = "opening Google Maps";
    speech.text = finalText;
    window.open('https://www.google.com/maps');
  }
  if (message.includes('LinkedIn')){
    const finalText = "opening Linkedin";
    speech.text = finalText;
    window.open('https://www.linkedin.com');
  }
  if (message.includes('Glassdoor')){
    const finalText = "opening Glassdoor";
    speech.text = finalText;
    window.open('https://www.glassdoor.co.in');
  }
  if (message.includes('Wikipedia')){
    const finalText = "opening wikipedia";
    speech.text = finalText;
    window.open('https://wikipedia.com');
  }
  if (message.includes('sing')){
    const finalText = "My Voice is not so good but i can play your favourite song sir.";
    speech.text = finalText;
    window.open('https://youtu.be/GOzafXB1r50');
  } 
  if (message.includes('w3school')){
    const finalText = "opening W3School";
    speech.text = finalText;
    window.open('https://www.w3schools.com');
     
  }
  if (message.includes('HTML')){
    const finalText = " You are on the perfect way to start.";
    speech.text = finalText;
    window.open('https://www.w3schools.com/html/default.asp');
     
  }
  if (message.includes('CSS')){
    const finalText = "Styling is so easy to do once you know it.";
    speech.text = finalText;
    window.open('https://www.w3schools.com/css/default.asp');
     
  }
  if (message.includes('JavaScript')){
    const finalText = "Programming makes it even more fun to develop web apps";
    speech.text = finalText;
    window.open('https://www.w3schools.com/js/default.asp');
     
  }
  if (message.includes('PHP')){
    const finalText = "Let`s learn to build the backend";
    speech.text = finalText;
    window.open('https://www.w3schools.com/php/default.asp');
     
  }
  if (message.includes('python')){
    const finalText = "The language of future is here and its easy to learn and code";
    speech.text = finalText;
    window.open('https://www.w3schools.com/python/default.asp');
     
  }
  if (message.includes('Bootstrap')){
    const finalText = "The easy and time saving way in developing web elements.";
    speech.text = finalText;
    window.open('https://www.w3schools.com/bootstrap/bootstrap_ver.asp');
     
  }
  if (message.includes('SQL')){
    const finalText = "Now Lets learn some data manipulation stuff";
    speech.text = finalText;
    window.open('https://www.w3schools.com/sql/default.asp');
     
  }
  if (message.includes('jQuery')){
    const finalText = "You are on streak of learning web stuff";
    speech.text = finalText;
    window.open('https://www.w3schools.com/jquery/default.asp');
     
  }
  if (message.includes('Gmail')){
    const finalText = "Lets look at some of our emails";
    speech.text = finalText;
    window.open('https://www.gmail.com');
     
  }

  
  speech.volume = 1;
  speech.rate = 0.8;
  speech.pitch = 1;
  speech.lang = "en";
 
  window.speechSynthesis.speak(speech);

 }

   
