
var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');

var user = { message: "" };

// When a customer selects “1”, the bot should return a list of items from the restaurant. It is up to you to create the items in your restaurant for the customer. The order items can have multiple options but the customer should be able to select the preferred items from the list using this same number select system and place an order.
// When a customer selects “99” out an order, the bot should respond with “order placed” and if none the bot should respond with “No order to place”. Customer should also see an option to place a new order
// When a customer selects “98”, the bot should be able to return all placed order
// When a customer selects “97”, the bot should be able to return current order
// When a customer selects “0”, the bot should cancel the order if there is.


var arrayOfPossibleMessage = [
    { message: "1", response: "Please select an item from the menu:<br>\nA. Hamburger<br>\nB. Pizza<br>\nC. Salad" },
    { message: "99", response: "Order Placed" },
    { message: "98", response: "Your placed order: " },
    { message: "97", response: "Your current order" },
    { message: "0", response: "Order cancelled successfully" }
]

function sendMessage(userMessage) {

    var messageElement = document.createElement('div');
    messageElement.style.textAlign = "right";
    messageElement.style.margin = "10px";


    messageElement.innerHTML = "<span> <b>You:</b> </span>" + "<span>" + userMessage + "</span>";

    chatContainer.appendChild(messageElement);

}
var userMessageOptions = textbox.value;
var orderArray = [];

function chatbotResponse(userMessage) {

    var chatbotmessage = "";

    if (userMessage == "1") {
        chatbotmessage = "Please select an item from the menu:<br>\nA. Hamburger<br>\nB. Pizza<br>\nC. Salad";
        localStorage.setItem('setUserMsg', true)
        var y = localStorage.getItem('setUserMsg')
        console.log('a', y)
    }

    if (userMessage == "A") {
        var x = localStorage.getItem('setUserMsg')
        console.log('x', x)
        if (x === true) {
            chatbotmessage = "You've ordered Hamburger"
            console.log('a', x)
        } else if (x !== true) {
            chatbotmessage = "You've ordered Hamburger"
            console.log('b', x)
        }
        localStorage.setItem('lastOrder', "Hamburger")
        orderArray.push('Hamburger')
        localStorage.setItem('orderArrayy', orderArray)
    }

        if (userMessage == "B") {
            var x = localStorage.getItem('setUserMsg')
            console.log('x', x)
            if (x === true) {
                chatbotmessage = "You've ordered Pizza"
                console.log('a', x)
            } else if (x !== true) {
                chatbotmessage = "You've ordered Pizza"
                console.log('b', x)
            }
            localStorage.setItem('lastOrder', "Pizza")
            orderArray.push('Pizza')
            localStorage.setItem('orderArrayy', orderArray)
        }

            if (userMessage == "C") {
                var x = localStorage.getItem('setUserMsg')
                console.log('x', x)
                if (x === true) {
                    chatbotmessage = "You've ordered Salad"
                    console.log('a', x)
                } else if (x !== true) {
                    chatbotmessage = "You've ordered Salad"
                    console.log('b', x)
                }
                localStorage.setItem('lastOrder', "Salad")
                orderArray.push('Salad')
                localStorage.setItem('orderArrayy', orderArray)
            }
            
            
            if(userMessage == "99"){
                chatbotmessage = "Order Placed Successfully"
            }else if(userMessage == "97"){
                var vvv = localStorage.getItem("lastOrder");
                chatbotmessage = `Your current order: ${vvv}`
            }else if(userMessage == "0"){
                localStorage.removeItem('lastOrder')
                chatbotmessage = "Order Cancelled Successfully"
            }else if(userMessage == "98"){
                var bbb = localStorage.getItem("orderArrayy");
                chatbotmessage = `Your orders are: ${bbb} ,`
            }
    


            var messageElement = document.createElement('div');

            messageElement.innerHTML = "<span><b>M's Restaurant:</b> </span>" + "<span>" + chatbotmessage + "</span>"

            chatContainer.appendChild(messageElement);
        }

        sendBtn.addEventListener('click', function (e) {


            var userMessage = textbox.value;

            if (userMessage == "") {

                alert('Please type in a message');
            } else {
                let userMessageText = userMessage.trim();
                userMessage = userMessageText
                textbox.value = "";
                sendMessage(userMessageText);
                chatbotResponse(userMessageText);
            }

        });