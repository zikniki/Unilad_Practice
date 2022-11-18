

function getData() {
    fetch("https://fakerapi.it/api/v1/companies?_gender")
        .then((response) => response.json())
        .then((json) => {
            var content = "";
            var len = 11;
            json = json.data
            for (let index = 1; index < len; index++) {
                var element = json[index - 1];
                var htmlhead =
                    "<div class='ServiceCard'> <h1> User Name is: " +
                    element["name"] +
                    " </h1>";
                var htmlh3 = "<p> Email is : " + element["email"] + "</p>";
                var htmlP = "<p> vat is : " + element["vat"] + "</p>";
                var htmlUser =
                    "<p> ZipCode is : " + element["phone"] + "</p>";
                var subcontent = htmlhead + htmlh3 + htmlP + htmlUser;

                content = content + subcontent + "</div>";

            }
            var bodyhtml = document.getElementById("wrap");
            bodyhtml.innerHTML = content;
        });
};


getData(); 