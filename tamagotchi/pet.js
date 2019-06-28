const feedButton = document.querySelector("#feedButton")
const playButton = document.querySelector("#playButton")
const status = document.querySelector('#status')
const foodstatus = document.querySelector('#foodstatus')
const playstatus = document.querySelector('#playstatus')
const timeLabel = document.querySelector('#timestatus')
const hungerLabel = document.querySelector('#hungerstatus')
const energyLabel = document.querySelector('#energystatus')
const happinessLabel = document.querySelector('#happystatus')
const imageDiv = document.querySelector('#image-container')

// console.log(foodstatus.innerHTML)
// console.log(status.innerHTML)
// console.log(petButton)
// console.log(feedButton)
// console.log(playButton)
// console.log(hungerLabel)
console.log(timeLabel)

let hunger = 20
let happiness = 20
let energy = 20
let time = 0

const handleTime = () => {
    time += 5
    hunger += 1
    energy += 5
    updateLabels()
    timeLabel.innerHTML = `Hello! The current time is ${time}`
    hungerLabel.innerHTML = `Your pet's hunger: ${hunger}`
    happinessLabel.innerHTML = `Your pet's happiness level: ${happiness}`
    energyLabel.innerHTML = `Your pet's energy level: ${energy}`

}

const updateLabels = () => {
    if (hunger >= 50) {
        status.innerHTML = "Your pet is really hungry! Feed it please!"
    }
    if (energy >= 50) {
        status.innerHTML = "Your pet is full of energy! Play with him!"
    }
    if ((hunger >=50) && (energy >= 50)) {
        status.innerHTML = "STOP NEGLECTING YOUR PET!"
    }
}

console.log(`hello! The current time is ${time}`)
console.log(`Your pet's hunger: ${hunger}`)

// timeLabel.innerHTML = `hello! The current time is ${time}`

feedButton.addEventListener('click', (e) => {
    feedPet ()
})

const feedPet = () => {
    hunger -= 1
    energy += 10
    if (hunger <=0) {
        hunger = 0
    }
    hungerLabel.innerHTML = `Your pet's hunger: ${hunger}`
    console.log("Thanks for feeding your pet!")
    console.log (`Your pet's hunger: ${hunger}`)
    //status.innerHTML = "Thanks for feeding your pet!"
    updateLabels()
}

playButton.addEventListener('click', (e) => {
    playPet ()
})

const playPet = () => {
    hunger += 5
    energy -= 1
    happiness += 1
    happinessLabel.innerHTML = `Your pet's happiness level: ${happiness}`
    energyLabel.innerHTML = `Your pet's energy level: ${energy}`
    console.log("Thanks for playing with your pet")
    console.log(`Your pet's happiness: ${happiness}`)
    updateLabels()

}

setInterval(handleTime, 3000)

// let count = 0
// petButton.addEventListener('click', (e) => {
//     console.log('Button pressed!')
//     count += 1
//     console.log(count)
//     console.log(`Button pressed ${count} times!`)
//     status.innerHTML = `<h3>Happiness: ${count} tail wags </h3>`
//     if (count > 10) {
//         status.innerHTML = `Okay, no more pets. Feed me!`
//         imageDiv.innerHTML = `<img src="hungrypup.jpg" />`
//     }
// })


// let countfeed = 0
// feedButton.addEventListener('click', e => {
//     console.log('Button pressed!')
//     countfeed += 1
//     console.log(countfeed)
//     console.log(`Button pressed ${countfeed} times!`)
//     foodstatus.innerHTML = `<h3> Treats: ${countfeed}  </h3>`
//     if (countfeed > 5) {
//         playstatus.innerHTML = `<h3> Energy: ${countplay + 1}! </h3>`
//         foodstatus.innerHTML = `I'm stuffed, I'm going to sleep now.`
//         imageDiv.innerHTML = `<img src="sleepypup.jpg" />`
//     }
// })

// let countplay = 0
// playButton.addEventListener('click', e => {
//     console.log('Button pressed!')
//     countplay += 1
//     console.log(countplay)
//     console.log(`Button pressed ${countplay} times!`)
//     playstatus.innerHTML = `<h3> Energy: ${10 - countplay}! </h3>`
//     if (countplay > 10) {
//         playstatus.innerHTML = `I'm so tired, let's nap now`
//     }
// })