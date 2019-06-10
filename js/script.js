function contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}
$(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    }
    Contact.prototype.fullName = function() {
      return this.firstName + " " + this.lastName;
    }
    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
