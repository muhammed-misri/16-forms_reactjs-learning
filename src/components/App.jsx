import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");
  function handleChange(event) {
    // -----------------------------------------------------------
    // function handleChange(event) {

    // event that triggered this (onChange)
    // For example, we can log event.target.value

    /*  
    - and remember that the event is the event 
    which triggered the onChange,
    
    - the target is the element that triggered this event 
    
    - and the value or any of the other properties on the target
    are the things that correspond to the value of some 
    of these attributes.
    
    */

    // -----------------------------------------------------------
    console.log(event.target.value);
    // muhammed

    console.log(event.target.placeholder);
    // What's your name?

    console.log(event.target.type);
    // text

    // -----------------------------------------------------------

    // console.log("Changed");
    // -----------------------------------------------------------

    setName(event.target.value);
  }

  /* 
  Now handleClick doesn't need to look at the event data
  it doesn't really care.
  It just need to be triggered when the user presses on this button.
  */
  function handleClick(event) {
    /*
    Well it's only in that moment when we want to take the value 
    of the event.target.value that came from the input and 
    then put it inside the H1
    */

    /* 
    - when you're writing a function you can simply just 
    use the name of the variable
    - You don't need the curly braces around it.
    */
    setHeading(name);
    /* 
    And this is a method that basically prevents 
    the default next behavior of the event which in our case 
    if it's coming from the form's onClick here, that is 
    going to be refreshing the page.
    */
    event.preventDefault();
  }

  return (
    <div className="container">
      {/* 3 components*/}
      <h1>Hello {headingText} </h1>
      {/* onChange */}

      {/*we can add our components inside form */}

      <form>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          /* 
        - in HTML this value is normally handled by the input 
        property and it sets it to whatever is being typed in here.
        
        - في ال ويب العادي يتم التعامل مع هذه القيمة عادةً بواسطة خاصية الإدخال 
        وتقوم بتعيينها على كل ما يتم كتابته هنا
        
        - But in React what you should really do is set the value 
        to the variable that comes from the event.target.value.
        
        - في ريأكت يجب عليك فعله حقًا هو تعيين القيمة على المتغير الذي يأتي من
        event.target.value
        
        - In our case that would of course be this thing name. 
        
        
        */

          value={name}
          // const [name, setName] = useState("");
          // this name
        />
        {/* 
      when your input element triggers the function that's 
      stored in the (onChange), it also passes over an object. 
      
      And that object corresponds to the event that 
      triggered this (onChange). 
      
      And we can log various things related to that event.
      

      // ----------------------------------------------------------
      عندما يقوم عنصر الإدخال بتشغيل الوظيفة المخزنة في (عند التغيير)
      فإنه يمر أيضًا فوق كائن
      وهذا الكائن يتوافق مع الحدث الذي أدى إلى هذا (عند التغيير)
      ويمكننا تسجيل العديد من الأشياء المتعلقة بهذا الحدث
      // ----------------------------------------------------------
      
      */}

        {/* 
        without ... type="submit" ::: it quickly refreshed the app 
        
        - And this is the default behavior of form components in HTML 
        
        - They refresh in order to submit, make a post request or 
        make a get request and refreshes the page.
        */}

        {/* 
        - And what happens is when you click on the button inside 
        the form especially if this is the submit button, 
        then it actually triggers a method on the form called onSubmit.

        - So you can in fact set this to the handler or whatever it is 
        you decide to do when that button gets clicked and this 
        has the same effect. 
        
        When the button gets clicked inside the form it triggers the 
        onSubmit of the form and calls the function that you have designated.
        
        */}
        {/* onClick */}
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
