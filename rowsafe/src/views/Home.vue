<template>
<div class="min-h-screen py-20">
    <div id="header" class="container mx-auto flex align-middle justify-center mb-10">
            <h1>Welcome to Rowsafe!</h1>
    </div>
    <div class="container mx-auto flex align-middle justify-center">
    <section id="weatherpane" class="grid grid-cols-1 gap-5">
            <p>Weather: <span id="weather-description"></span></p>
            <p>Temperature: <span id="temp"></span></p>
            <div class="grid grid-cols-2 gap-5">
                <p>Sunrise:</p>
                <p>Sunset:</p>
            </div>
            <p>Wind Speed:</p>
            <p>Humidity:</p>
    </section>
    </div>
    <div class="container mx-auto flex align-middle justify-center mt-10 ">
    <section id="currentrides" class="grid grid-cols-1 gap-5">
        <div>
            <p>ride1</p>
        </div>
        <div>
            <p>ride2</p>
        </div>
        <div>
            <p>ride3</p>
        </div>
    </section>
    </div>
    <div class="container mx-auto flex align-middle justify-center mt-20 ">
    <section id="navigation" class="grid grid-cols-2 gap-5">
        <div>
            <router-link to="/newride" class="w-full bg-teal-500 py-3 text-center text-white">Record New Ride</router-link>
        </div>
        <div>
            <router-link to="/history" class="w-full bg-teal-500 py-3 text-center text-white text">Ride History</router-link>
        </div>
    </section>
    </div>
</div>
</template>