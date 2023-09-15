const fs = require('fs');
const im = require('imagemagick');
im.resize({
  srcData: fs.readFileSync('./src/Assets/images/logo.png', 'binary'),
  width:   320
}, function(err, stdout, stderr){
  if (err) throw err
  fs.writeFileSync('./src/Assets/images/logo320.png', stdout, 'binary');
  console.log('resized logo.png to fit within 320px width')
});