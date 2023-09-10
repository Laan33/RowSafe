<template>
    <div class="min-h-screen py-40">
          <div class="container mx-auto flex align-middle">
              <div class="w-full lg:w-1/2 py-16 px-12">
                <h2 class="text-3xl mb-4">Login</h2>
                <form action="/home" class="grid grid-cols-1 gap-5">
                    <input type="text" placeholder="Username" class="border border-gray-400 py-1 px-2 w-full">
                    <input type="password" placeholder="Password" class="border border-gray-400 py-1 px-2 w-full">
                    <input type="submit" class="w-full bg-teal-500 py-3 text-center text-white" value="Login">
                </form> 
              </div>
            </div>
          </div>
    </template>