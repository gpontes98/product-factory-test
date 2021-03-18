var contentBefore = "<p>This course has been attempted by zero people who are eager to learn product design, especially user experience and user interface, so it is not a prerequisite, but due to the limited capacity of the priority course with early enrolled people, others can participate in future courses.</p> <p>Obviously, the ability to use tools like Adobe Photoshop and Adobe Illustrator as well as Microsoft Word, Excel tools, and of course a lot of enthusiasm and energy,</p>";
var contentDuring = "<p>orem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis sagittis sagittis. Suspendisse fermentum malesuada urna quis sagittis. Aliquam urna justo, efficitur sit amet sapien sit amet, tincidunt lobortis magna.</p> <p>Cras venenatis luctus massa nec pulvinar. Donec finibus, ligula nec volutpat venenatis, nulla urna lacinia erat, in luctus magna purus posuere lacus. Ut nec turpis nec ante tincidunt varius id id orci. Donec eget fringilla arcu, ac luctus ipsum.</p>";
var contentAfter = "<p>Praesent et egestas orci. Donec volutpat nec mi at dictum. Phasellus vel scelerisque orci. Nulla eget leo metus. Mauris hendrerit tempor nisi.</p> <p>Nulla luctus, turpis in cursus ultrices, justo lectus ultrices nunc, non dignissim urna sem sit amet libero. Donec malesuada condimentum suscipit. Duis eu molestie turpis, a ultricies magna.</p>";

function changeContentExperience(){
    var option1 = document.getElementById("option1");
    var option2 = document.getElementById("option2");
    var option3 = document.getElementById("option3");

    if(option1.checked == true){
        document.getElementById("content-experience").innerHTML = contentAfter;
    }

    if(option2.checked == true){
        document.getElementById("content-experience").innerHTML = contentDuring;
    }

    if(option3.checked == true){
        document.getElementById("content-experience").innerHTML = contentBefore;
    }

}