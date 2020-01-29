import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Journal } from './journal';
import { Entry } from './entry';


// User interface
var journal = new Journal();

function displayAllMethods(journalToDisplay){
  var methodsList = $("ul#journalEntryTeasers");
  var htmlForMethodsList = "";
  journalToDisplay.entries.forEach(function(entry){
    var teaser = entry.getTeaser();
    var words = entry.countWords();
    var vowelsConsonants = entry.countVowelsConsonants();
    htmlForMethodsList += "<li><em>"+teaser+"</em><br>"+words+"<br>"+vowelsConsonants+"</li>";
  });
  methodsList.html(htmlForMethodsList);
}
function resetForm(){
  $("#entryTitle").val("");
  $("#entryBody").val("");
}

$(document).ready(function(){
  $("#journalEntry").submit(function(event){
    event.preventDefault();
    var inputTitle = $("#entryTitle").val();
    var inputBody = $("#entryBody").val();
    var newEntry = new Entry(inputTitle,inputBody);
    journal.addEntry(newEntry);
    displayAllMethods(journal);
    resetForm();
  });
});
