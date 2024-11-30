// Select DOM elements
const chatDisplay = document.getElementById("chatDisplay");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

// Function to add messages to the chat display
// Function to add messages to the chat display
function addMessage(sender, message) {
  const newMessage = document.createElement("p");

  // If the message includes an anchor tag, we use innerHTML to render it
  newMessage.innerHTML = `${sender}: ${message}`; // Allow HTML content

  // Append the new message to the chat display
  chatDisplay.appendChild(newMessage);

  // Auto-scroll to the bottom of the chat display
  chatDisplay.scrollTop = chatDisplay.scrollHeight; 
}

// Handle send button click
sendBtn.addEventListener("click", () => {
  const message = userInput.value.trim();
  if (message) {
    addMessage("You", message);
    userInput.value = "";

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(message);
      addMessage("Bot", botResponse);
    }, 1000);
  }
});

function getBotResponse(userMessage) {
  const message = userMessage.toLowerCase();

  if (message.includes("hello")) {
    return "Hi there! How can I help you today?";
  } else if (message.includes("climate")) {
    return "Climate change is a critical issue. Let's discuss sustainable solutions.";
  } else if (message.includes("carbon")) {
    return "Carbon emissions are a major contributor to global warming. Reducing them is key to a sustainable future.";
  } else if (message.includes("pollution")) {
    return "Pollution is a huge concern, both air and water. We must reduce waste and support cleaner technologies.";
  } else if (message.includes("sustainability")) {
    return "Sustainability involves meeting our needs without compromising future generations. Renewable energy and recycling are key factors.";
  } else if (message.includes("deforestation")) {
    return "Deforestation harms biodiversity and contributes to climate change. Protecting forests is critical for our environment.";
  } else if (message.includes("recycling")) {
    return "Recycling helps reduce waste and conserves natural resources. Be sure to separate your paper, plastics, and metals!";
  } else if (message.includes("water")) {
    return "Water conservation is essential. Simple steps like reducing water wastage and fixing leaks can make a big difference.";
  } else if (message.includes("biodiversity")) {
    return "Biodiversity is the variety of life on Earth, and it's essential for ecosystem stability. Protecting habitats is key to preserving it.";
  } else if (message.includes("solar energy")) {
    return "Solar energy is a renewable and clean source of power. Installing solar panels can help reduce your carbon footprint.";
  } else if (message.includes("wind energy")) {
    return "Wind energy is another renewable source. It generates electricity without producing harmful emissions.";
  } else if (message.includes("climate change")) {
    return "Climate change is a global issue caused by human activities, particularly the burning of fossil fuels. We must take action now to mitigate its effects.";
  } else if (message.includes("greenhouse gases")) {
    return "Greenhouse gases, like CO2, trap heat in the Earth's atmosphere, leading to global warming. Reducing emissions is vital.";
  } else if (message.includes("electric cars")) {
    return "Electric cars reduce the need for fossil fuels and help lower emissions. Consider switching to an electric vehicle to help the environment!";
  } else if (message.includes("fossil fuels")) {
    return "Fossil fuels like coal, oil, and natural gas are major contributors to climate change. Transitioning to renewable energy is crucial.";
  } else if (message.includes("zero waste")) {
    return "Zero waste is a lifestyle that aims to minimize waste production. It includes reusing, recycling, and composting to reduce landfill waste.";
  } else if (message.includes("overfishing")) {
    return "Overfishing threatens marine life and disrupts ecosystems. Sustainable fishing practices are essential for preserving oceans.";
  } else if (message.includes("green energy")) {
    return "Green energy comes from renewable sources like wind, solar, and hydroelectric power. It's a cleaner alternative to fossil fuels.";
  } else if (message.includes("electricity")) {
    return "Reducing electricity consumption and using energy-efficient appliances can help decrease your environmental impact.";
  } else if (message.includes("electricity")) {
    return "Reducing electricity consumption and using energy-efficient appliances can help decrease your environmental impact.";
  } else if(message.includes("know more")){
    return `Here you can visit our blogging website! <a href="/blog.html" target="_blank">Nature's Pulse</a> to know more.`;

  }
  else {
    return `I'm here to assist with any environmental questions you have! <a href="https://www.google.com" target="_blank">Click here</a> to visit Google.`;
  }
}

