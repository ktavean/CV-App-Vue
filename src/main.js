import { createApp } from 'vue/dist/vue.esm-bundler';

const app = createApp(
    {
        data() {
            return {
                cv_data: {
                    about: {
                      firstName: "Octavian",
                      lastName: "Todor",
                      email: "doggo.heckin@gmail.com",
                      address: "Lorem Ipsum Street No. 17",
                      phone: "+40737928741",
                      description: "Doggo ipsum  Floofs most angery pupper I have ever seen super chub aqua doggo most angery pupper I have ever seen big ol, borking doggo pats h*ck long doggo, shoober shoob ur givin me a spook most angery pupper I have ever seen. Smol wow very biscit boof aqua doggo bork puggo shoob, big ol you are doing me a frighten the neighborhood pupper you are doing me a frighten borking doggo. "
                    },
                    education:  [
                        {
                          name: "Lorem Ipsum University",
                          field: "Psychology",
                          start: "2022-07-07",
                          end: "2022-07-28",
                          checkbox: false,
                        }
                    ],
                    experience: [
                        {
                          name: "Lorem Ipsum company",
                          position: "Junior Dev",
                          start: "2022-07-16",
                          end: "2022-07-26",
                          checkbox: false,
                        }
                    ],
                    extraInfo: {
                        skills: "HTML, CSS, Javascript, React.JS",
                        languages: "Romanian, English"
                      }
                  },
                cv_pic: "./assets/cv.jpg"
              }
        },
        methods: {
          addInput(type) {
            switch(type) {
              case "education":
                this.cv_data.education.push(
                  {
                    name: "",
                    field: "",
                    start: "",
                    end: "",
                    checkbox: false
                  }
                )
                break;
              case "experience":
                this.cv_data.experience.push(
                  {
                    name: "",
                    position: "",
                    start: "",
                    end: "",
                    checkbox: false
                  }
                )
                break;
            }
          },
          check(type, index) {
            switch(type) {
              case "education":
                this.cv_data.education[index].checkbox = this.cv_data.education[index].checkbox ? false : true;
                this.cv_data.education[index].end = "Present";
                break;
              case "experience":
                this.cv_data.experience[index].checkbox = this.cv_data.experience[index].checkbox ? false : true;
                this.cv_data.experience[index].end = "Present";
                break;
            }
            console.log(this.cv_data);
          },
          removeInput(type, index) {
            switch(type) {
              case "education":
                this.cv_data.education.splice(index, 1);
                break;
              case "experience":
                this.cv_data.experience.splice(index, 1)
                break;
            }
            console.log(this.cv_data);
          }
        }
    }
).mount("#app");


