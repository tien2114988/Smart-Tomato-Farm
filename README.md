# Smart Tomato Farm

## Name branch
<pre>
dev/ui/{feature}
dev/api/{feature}
fix/ui/{feature}
fix/api/{feature}
</pre>

## How to run
- step 1 : cd api (or ui) 
- step 2 : npm start

## File Structure
### UI
<pre>
src 
|__components (shared components)
   |__Header 
      |__Header.jsx
      |__Header.css
|__features 
   |__Manage
      |__components (components of a feature)
      |__pages (pages of a feature)
      |__Manage.jsx (entry point of a feature)
App.js
index.js (entry point of program)
</pre>

### API
<pre>
app 
|__config 
   |__db.config.js
|__controllers 
   |__manage.controller.js
|__middleware
   |__auth.middleware.js
|__models
   |__area.model.js
|__routes
   |__manage.route.js
server.js (entry point of program)
</pre>


 ## Member in charge
 - Nguyễn Đại Tiến : manage (ui, api)
 - Nguyễn Trương Phước Thọ : light (ui, api)
 - Trịnh Khải Toàn : water (ui) , statistic (ui)
 - Đặng Hà Sang : database (deadline : 23h59 29/3/2024), water (api)
 - Nguyễn Quốc Việt : iot
