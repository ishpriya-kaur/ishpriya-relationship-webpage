/* script.js */
document.getElementById('relationshipForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim().toLowerCase();
  let displayText = '';

  switch(name) {
    case 'divjot':
      displayText = 'I love you Dj! I want you to know that you are really special to me and I cherish every moment we spend together. You make my life happier and my days less stressful. You are my bestfriend, my boyfriend, my gossip partner and everything a person needs to stay happy in life. You are just the perfect addition to my life.\n\nYours,\nIshpriya';
      break;
    case 'meenu':
      displayText = 'I love you Mamma, please start working out and stop worrying about my meals.\n\nYours,\nShameenu';
      break;
    case 'manjeet':
      displayText = 'I love you Paapa. Please stop watching videos in full volume and buy new headphones. \n\nYours,\nShmaneeu';
      break;
    case 'ishnoor':
      displayText = 'T4: TFI (brother/sibling)';
      break;
    case 'dipali':
      displayText = 'T5: TFD (bestfriend/friend)';
      break;
    case 'harshita':
      displayText = 'T6: TFH (friend)';
      break;
    default:
      displayText = 'No information available for this name.';
  }

  const newWindow = window.open('', '_blank');
  newWindow.document.write(`<!DOCTYPE html><html lang='en'><head><link rel='stylesheet' href='result-styles.css'></head><body class='result-page'><h1 class='result-text'>${displayText}</h1></body></html>`);
  newWindow.document.close();
});