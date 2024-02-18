# Angular2024Cource
Angular basics

Angular is javascript framework used to develop the front and application
the application more reactive responce the applications look like the mobile application means 
the usage and feel of the responce and angular application are SPA Single Page Application

When you creating the angular new app 
you need to download the node js from the browser 
download the latest version of node js
Note::- uninstall (all) installed versions on your machine first 
Go to nodejs.org and download the latest version- .
>>After completing the download just check the version::- node -v

Npm also need to install latest version
first check the npm is there if it is there in your machine then un install then install the latest version 
>>npm uninstall -g angular-cli @angular/cli 
>>npm cache verify
>>npm install -g angular-cli @angular/cli
or you can add the comond line as
>>npm install -g @angular/cli 
>> After completing the download you just check the version  :: npm -v


Afte  completing the all the setup just create the one folder and open it  in terminal 
and to create the app jsut add the
Or open the terminl and if you want go to the perticular folder then add it as comond line 
cd foldername
after that 
>> ng new app_nmae
after that it will ask the routing and css sugession
if you new for routing just give as no or n
but for css you need to give yes or y
becouse we need to css for styling the page.
we  can also give at the starting of the application for routong as no
>>> --no --routing


After creation application you just need to open it in IDE (Intigrated Development Environment)
VS Code free source and another one is web strome application is there but this one is paid application
To open the angular application In IDE just right click and open it in vs code 
Other wise go to the terminal and go to your project oplder ( cd foldername)
then enter the comand line Code . on your terminal then youtr angular porject will open it in  vs code application

you can see the folder and file structure to your project
first one is e2e >end to end testing 
nodemodules folder you can see the dependance downloded in the node module
src is the source folder all the created the component are we can see in this folder
you can see the 
App.Component.html
App.component.css
App.component.ts
App.Component.spect.ts
App.Module.ts

then other configuration file you can see the below of the files
in that pakage.json file you can see the dependenciesdependencies

When you need open the app in to browser then 
just add the ng serve to you comond terminal
>>ng serve

If your using port you will get the 
port is alrady using  ng serve process running - make sure to quit that
or use another port
ng serve --port anotherport number


After making the ng serve you will get the cli content in the browser then
you cna eddit that content.
go to the html file and make the changes and see the chnges after saving the file. 

18/02/2024 <funday>sunday<funday/>
How we can see the some comtent in the browser?
 for example you can  add the sytring to the browser using the header tag 
for example 
<h1>hello world</h1> 
it will show thw hello world with the big text 
if you want to less words width  then you can use the 
<h3>hello world</h3>
<h2>hello world</h2>
<h4>hello world</h4>
<h5>hello world</h5>
<h6>hello world</h6>

you can try this header tag and you will see the difference in the words width


when you declered the string in the .ts file then you need to show that content is the browser 
that time you need to use the data binding concept 
for example you declered the 
string name in the .ts file
myName:string='Muragesh';


One Wayt data Binding
this string you need to consume it in  .html file that time it will show that content in the browser
My name is {{myName}} 
like we can use 
<h1>{{myName}}</h1>

this {{myName}} what we called one way data binding  what ever the  component to the view  binding data 
we called it as the one way data binding. 
what ever the myNmae is holding the content that we are  showing in the view

Two Way data binding [(ngModule)]

when you are using the two way data binding this time you have to import the formsModule from the '@angular/forms'
in you app.module.ts file and after that you need to import the formmodule in ng

for Example When you want to show the content in the view  (.html file) after that modified content hans to reflect in  component (.ts file )
that time we are using the [(ngModule)]  concept two way data binding

You have one input box and you are showing the content in that input box and you modified the content in that box you need to show that data in paragraph or you have to store that data in data base you need to  use the two way data binding
in ts file you declered the name as string and assigned some content to that variable
naae:string='muragesh';

<input type="text"  [(ngModel)]="name">
you can see the muragesh in the input box after that you can modifie the content in teh input box modified contnet you need to see means you ned to consume the 
declerd variable in your view 
 
<p>name</p>
now you can see the muragesh name at th first time after that you can see the modified content also in the  paragraph thats how two way data binding it will work


Course structure

Getting Started
The Basic
Components and databinding(one way  & two way)
Directives [(ngModule)] is also directives
Services & Dependancy injection
Routing
Observables
Forms
Pipes
Http
Authenticatiom
Optimization & NgModules
deployments
Animations and testing
how to get the most out of the Cource
Watch the Videos
Do the Assignments
Do the Project
ask te Q&A
also answer questions.

What is the script?
It is the super set of java script.
the type sript code is run in java script at the end
more fetutres  in type scipt.

Botstrap usage in you project for styeling 
Download the bootstrap
npm install --save botstrap

Go to your app.module.ts
 if you add the any style in the styles.css it will effect all the component styling

 Basic  

 How an angular App gets Loaded and Started?

index.html file you can see inside the  body tag 
 <app-root></app-root>
 tag is added 
 what ever the changes you made in the app componet related the css , ts and html file it will render to the index.html file and it will show in the browser also.
 In your @component decorater you can see the selector ass the  "app-root"  string that will load the component
  and when inspect and see the source code you will see the in the body tag you will see the  <app-root></app-root> tag and some botstrap and the style script tag in teh source code  these are injected by the cli 

  explore  the mail.yts file 

  What is the Component?
  Components are Inportent!
  you can create the more tahn one component and you can use them in you applivcation where ever yuou want means reusable 
  for exmple you wrote some logic in the abc component and you want use in that  logic in the different component 
  the logic off the abc component is to add or show the user when they want to see the user or add user that time you need to 
  abc component.

creating a new component
go to the  src folder and inside the src folder app folder go to the app folde in that create one folder and with the component name
like server 
in that add the file like sever.component.ts
you will get one empty file in yopur project
componet is just one class  of type script
just add the  this in your ts file
export class ServerComponent{
   
}

add the @component({})
and inport oit from the '@angular/core'
in side the @component
add selector and the selector should be the string
like you can add 
selecto:'app-server' it can be any thig you cna give other name also
when ever you need to use this componet that time you need to use the selector tag in your html file 
like  <app-server>  <app-server/> it will load the server componet in you html file 
 
 when you want to use the template in you component create the one more file in the same folder with extention .html

like sever.component.html

now we created one component and  we will use it 
to use we will dive into teh  app.component.ts
we need to change somethig in this file to consume the created component

you need to register your created component in app.module.ts file.
In the file you can see the @ngModule decorative section you can see the 
declaration section in that you need to add you component and after that you need to  import it the file 
in the  above of the @ngModule decorative 

when you added the component in app module .ts file now yuu can use the added module in your 
project.
  how to use the component using selector string::
  <app-server><app-server/>
  add this tag in you html file you can see the chnges

  creating Components with the CLI & Nesting Components
  Cli Comond

  ng genertae component componentname
  or shortcut
  ng g c componentname

The cli generate the one folder inside the app folder and it will generate the files
and it will automaticaly add the component in  the app.module.ts file
now i creted the one component with he name servers
 adding cli comond as 
 ng g c servers
 you see the folder name as the servers and inside that folder you can see the files 
 in .ts file you can see the @component decorater it will add it dictly no need ton add  all the selecto and templateurl ans styleurl and the impoted and in declaration section componenet is registered automaticaly in the app.module.ts file also

 in the created file .ts file if contain the construter construter(){} and the ngOnInit ngOnInit(){}

Just explore it more on these


how to use the inline template styling for the component 

in you conponent in .ts file you can chnage the templateurl to template and add you html tag in that  but you need to add it in sigle line if you want add it more line if tags in the template you have to use the javascrpt notaion 
back tic simple and  you can add the next line  also tags and other things

whjen you need create teh div with class
just add the .classname 
it will create the dive with the class  no nned to add teh class name manualy
>we mad mistake related te botstrap installation and impoting it in the angular.json file



