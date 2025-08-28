// Heart counter functionality

const hearts = document.querySelectorAll('.card-heart');
hearts.forEach(heart => {
    heart.addEventListener('click', function() {
        let headerHeartCount = getElementsID('header-heart-count');
        let currentCount = parseInt(headerHeartCount.innerText);
        currentCount += 1;
        headerHeartCount.innerText = currentCount;
    });
})


// Call button functionality
const callButtons = document.querySelectorAll('.call-btn');
callButtons.forEach(button => {
    button.addEventListener('click', function() {
        const serviceName   = getElementsID('service-name').innerText;
        const serviceNumber = getElementsID('service-number').innerText; 
        let bonusNumber   = getElementsID('bonus-number'); 

        // Decrement bonus number by 20 on each call
         let currentBonus = parseInt(bonusNumber.innerText);

         if (currentBonus < 20) {
            alert('Not enough bonus to make a call. You need at least 20 bonus points.');
            return;
         } else {
            alert(`Calling ${serviceName} at ${serviceNumber}...`);
            currentBonus = currentBonus - 20;
            bonusNumber.innerText = currentBonus

            // Add call details to the sidebar
            let callHistoryBlock = getElementsID('call-history-block');
            //callHistoryBlock.remove()

            let sidebarServiceName = getElementsID('siderbar-service-name');
            let sidebarServiceNumber = getElementsID('siderbar-service-number');
            let sidebarTime = getElementsID('sidebar-time');

            let currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true } );

            sidebarServiceName.innerText = serviceName;
            sidebarServiceNumber.innerText = serviceNumber;
            sidebarTime.innerText = currentTime;

            
            // Add multiple call history blocks
            let newCallHistoryBlock = callHistoryBlock.cloneNode(true);
            callHistoryBlock.parentNode.appendChild(newCallHistoryBlock);

            callHistoryBlock.classList.remove('hidden');
        }

        

    });
})

// copy button function 
let copyBtn = getElementsID('copy-btn');
copyBtn.addEventListener('click', function(error_catch) {
    const serviceNumber = getElementsID('service-number').innerText; 
    // increment copy count
    const copyCountBtn = getElementsID('copy-count-btn');
    let currentCopyCount = parseInt(copyCountBtn.innerText);
    currentCopyCount += 1;
    copyCountBtn.innerText = currentCopyCount + ' copy';

    // Copy to clipboard functionality
    navigator.clipboard.writeText(serviceNumber)
    .then(function() {
        alert('Service number copied to clipboard: ' + serviceNumber);
    })
    .catch(error_catch => {
        console.error('Could not copy text: ', error_catch);
    });

    console.log(copyBtn);
})


// Clear button function 
let clearBtn = getElementsID('clear-btn');

clearBtn.addEventListener('click', function() {
    // We need to grab all of the class .history-block as we have clone node on call-btn click
    const getAllHistoryBlocks = document.querySelectorAll('.history-block');

    // removing all of the history blocks
    getAllHistoryBlocks.forEach(block => {
        block.remove();
    })
    
})

// global functions
function getElementsID(id) {
    return document.getElementById(id);
}