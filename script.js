// script.js
document.getElementById('relationshipForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim().toLowerCase();
    let displayText = '';
    switch(name) {
      case 'divjot':
        displayText =  displayText = 'I love you Dj! \nI want you to know that you are really special to me and I cherish every moment we spend together. You make my life happier and my days less stressful. You are my bestfriend, my boyfriend, my gossip partner and everything a person needs to stay happy in life. You are just the perfect addition to my life.\n\nYours,\nIshpriya';
        imageTag = '<"https://imgur.com/a/y8s11Tw", alt="Divjot Image">'; 
        break;
      case 'meenu':
        displayText = 'T2: TFM (mom)';
        break;
      case 'manjeet':
        displayText = 'T3: TFP (dad/paapa)';
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