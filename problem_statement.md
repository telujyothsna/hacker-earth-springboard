### Springboard - Learning Hub — one stop hub for all the learning paths!
Learning Path, Career Choices, Trending Courses

#### Problem Statement
Develop a pseudo front end application which would let users help list and browse learning paths conveniently.

#### Minimum Requirement
* Use of [Web API](https://hackerearth.0x10.info/api/learning-paths?type=json&query=list_paths) to fetch course detail.
* paths[] — [ id, name, image, tags[], learners, hours, description, sing_up ].
* Visually interactive responsive design listing all the paths.
* Archive and submit source code, screenshots, deployment instructions.

#### Plus Point
* A feature to Search (via tags).
* Add autocomplete feature to Search product tags conveniently.
* Implement Vote feature (to up-vote / down-vote respective path, maintain total up votes and update Vote via localstorage).
* Display total products and integrate product details (rating, price, image, tags, etc)
* Link sing_up to respective URL with “View Curriculum” option. (Should open in new window | target="_blank")
* Feel free to use your favourite UI/UX frameworks and tools in design and development.

#### Extra Work 
###### (if time permits / wizard)
* Awesome if you could manage to deploy/host this webapp at any of your favourite cloud portal and share Demo URL/Screenshot. (i.e. AWS, Heroku, OpenShift, etc)
* Display and keep track of API Hits via response Header: X-RateLimit-Remaining / X-RateLimit-Limit.
* Implement Sort (by Votes, Learners or Duration ) feature.
* Custom elegant design, fonts and icons to make web app more user-friendly.
* You may add portfolio activity comprising awesome work you have done on web application(s).
* Use your imagination and add features which would make things easier for end users.

#### Guide
* Learning-Path API:
  - To fetch Learning Path details: https://hackerearth.0x10.info/api/learning-paths?type=json&query=list_paths
* Ideal Frontend Stack:
  - Responsive Design: HTML5, CSS3, Bootstrap
  - Any of your favourite JS Framework: Could be Pure JS, jQuery, Angular, Backbone or React.
  - Optional: Typography, Subtle pattern, Custom Icons.
* PS: Application can be built with use of client-side scripting and need not require any backend.
* IMPORTANT: Archive source, screenshots and documentation in ZIP file and upload it.
* For icons, color and subtle texture:
  - http://www.flatuicolorpicker.com/green
  - http://glyphsearch.com/
  - http://subtlepatterns.com/thumbnail-view/
  - http://codebeautify.org/jsonviewer
  - http://www.flaticon.com/categories

#### API Response
```json
{
  "paths": [
    {
      "id": "1",
      "name": "User Experience Design",
      "image": "https://d1v7bd3b0sjvlo.cloudfront.net/uploads/learning_path/thumb/ux_design_thumb.png",
      "tags": "design research, UI frameworks, wireframes, user centric approach",
      "learner": "26,093",
      "hours": "131+",
      "description": "This Learning Path is a curriculum of UX Design courses, videos and resources from across the internet, organized into a logical sequence that a beginner can follow.",
      "sign_up": "https://www.springboard.com/accounts/google/login/?process=login&next=/learning-paths/user-experience-design/learn/"
    },
    {
      "id": "2",
      "name": "MBA Essentials",
      "image": "https://d1v7bd3b0sjvlo.cloudfront.net/uploads/learning_path/thumb/mba_thumb.png",
      "tags": "finance, accounting, opertions, strategy",
      "learner": "15,566",
      "hours": "505+",
      "description": "Learn core business skills and how to apply them professionally and in your personal life",
      "sign_up": "https://www.springboard.com/accounts/google/login/?process=login&next=/learning-paths/mba/learn/"
    },
    {
      "id": "3",
      "name": "Android App Dev",
      "image": "https://d1v7bd3b0sjvlo.cloudfront.net/uploads/learning_path/thumb/android_thumb_hHLP9dL.png",
      "tags": "material design, sensors, maps, location service, studio",
      "learner": "22,887",
      "hours": "91+",
      "description": "Learn android programming by building apps from scratch. Learn how to design and build Android apps and take your ideas to millions of people.",
      "sign_up": "https://www.springboard.com/accounts/google/login/?process=login&next=/learning-paths/android/learn/"
    },
    {
      "id": "4",
      "name": "Social Entrepreneurship",
      "image": "https://d1v7bd3b0sjvlo.cloudfront.net/uploads/learning_path/thumb/social_ent_thumb.png",
      "tags": "design solution, business plan, failing fast, learning quick",
      "learner": "1,715",
      "hours": "17+",
      "description": "A robust introduction to Social Entrepreneurship, Learn and build a roadmap to launch your very own social venture",
      "sign_up": "https://www.springboard.com/accounts/google/login/?process=login&next=/learning-paths/social-entrepreneurship/learn/"
    },
    {
      "id": "5",
      "name": "Apply to Y Combinator",
      "image": "https://d1v7bd3b0sjvlo.cloudfront.net/uploads/learning_path/thumb/y_comb_thumb.png",
      "tags": "startups, hackernews, ycombinator,",
      "learner": "1,658",
      "hours": "3+",
      "description": "A set of resources from YC partners and alumni to help you turn in a strong YC application. This course is collection of Gautam Tambay, Founder, Springboard.",
      "sign_up": "https://www.springboard.com/learning-paths/apply-to-Ycombinator/learn"
    },
    {
      "id": "6",
      "name": "Data Analysis",
      "image": "https://d1v7bd3b0sjvlo.cloudfront.net/uploads/learning_path/thumb/data_analysis_thumb.png",
      "tags": "processing, wrangling, visualizations, prediction, analysys",
      "learner": "34,068",
      "hours": "310+",
      "description": "Learn statistics, data wrangling and visualization with this free curriculum By an Airbnb/MIT alum. Learn how to manipulate and analyze data better with this free online curriculum",
      "sign_up": "https://www.springboard.com/accounts/google/login/?process=login&next=/learning-paths/data-analysis/learn/"
    },
    {
      "id": "7",
      "name": "Backend: Py/Django",
      "image": "https://d1v7bd3b0sjvlo.cloudfront.net/uploads/learning_path/thumb/web2.png",
      "tags": "python, django, backend",
      "learner": "16,830",
      "hours": "74+",
      "description": "Learn how to build websites and web-apps from scratch using Python and Django. Build and deploy fully functional web applications. Become a full-stack developer with the help of one of the founder Paul.",
      "sign_up": "https://www.springboard.com/accounts/google/login/?process=login&next=/learning-paths/web-development-python-django/learn/"
    }
  ],
  "quote_max": "100000",
  "quote_available": "1231"
}
```
