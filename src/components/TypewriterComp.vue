<template>
    <div class="
        text-5xl md:text-8xl lg:text-10xl 
        font-extrabold 
        h-screen
    ">
        <span class="typed-text">{{ typeValue }}</span>
        <span class="blinking-cursor">|</span>
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
    </div>
  </template>
  
  <script>
  export default {
    name: "typeWiriter",
    data: () => {
      return {
        typeValue: "",
        typeStatus: false,
        displayTextArray: ["This example is about animations and transitions.", 
        "It is build on the example of the previous course ...", 
        "... and illustrates different ways of animating elements using Tailwind."],
        typingSpeed: 50,
        erasingSpeed: 50,
        newTextDelay: 2000,
        displayTextArrayIndex: 0,
        charIndex: 0,
      };
    },
    props: {},
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    },
    methods: {
      typeText() {
        if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
          if (!this.typeStatus) this.typeStatus = true;
          this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(
            this.charIndex
          );
          this.charIndex += 1;
          setTimeout(this.typeText, this.typingSpeed);
        } else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        if (this.charIndex > 0) {
          if (!this.typeStatus) this.typeStatus = true;
          this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(
            0,
            this.charIndex - 1
          );
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        } else {
          this.typeStatus = false;
          this.displayTextArrayIndex += 1;
          if (this.displayTextArrayIndex >= this.displayTextArray.length)
            this.displayTextArrayIndex = 0;
          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      },
    },
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="scss" scoped>

  
  // Cursor blinking CSS Starts...
  .blinking-cursor {
    color: #2c3e50;
    -webkit-animation: 1s blink step-end infinite;
    -moz-animation: 1s blink step-end infinite;
    -ms-animation: 1s blink step-end infinite;
    -o-animation: 1s blink step-end infinite;
    animation: 1s blink step-end infinite;
  }
  @keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: #2c3e50;
    }
  }
  @-moz-keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: #2c3e50;
    }
  }
  @-webkit-keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: #2c3e50;
    }
  }
  @-ms-keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: #2c3e50;
    }
  }
  @-o-keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: #2c3e50;
    }
  }
  // Cursor blinking CSS Ends...
  </style>
  