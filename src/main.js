import { Journal } from './journal';
import './styles.css';

$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    var inputtedTitle = $("#title").val();
    var inputtedBody = $("#body").val();
    var entry = new Journal(inputtedTitle, inputtedBody);
    entry.combineWords();
    entry.countWords();
    entry.countCharacters();
    entry.getTeaser();

    $(".numberOfWords").html(entry.word);
    $(".numberOfVowels").html(entry.vowel);
    $(".numberOfConsonants").html(entry.consonant);
    $(".teaser").html(entry.teaser);
  });
});