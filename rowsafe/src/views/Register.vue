<template>
<div class="min-h-screen py-40">
      <div class="container mx-auto">
          <div class="w-full lg:w-1/2  py-16 px-12">
            <h2 class="text-3xl mb-4">Register</h2>
            <p class="mb-4">
              Create your account.
            </p>
            <form action="/login" class="grid grid-cols-1 gap-5">
              <div class="grid grid-cols-2 lg:grid-cols-1 gap-5">
                <input type="text" placeholder="Firstname" class="border border-gray-400 py-1 px-2">
                <input type="text" placeholder="Surname" class="border border-gray-400 py-1 px-2">
              </div>
                <input type="text" placeholder="Email" class="border border-gray-400 py-1 px-2 w-full">
                <input type="password" placeholder="Password" class="border border-gray-400 py-1 px-2 w-full">
                <input type="password" placeholder="Confirm Password" class="border border-gray-400 py-1 px-2 w-full">
                <input type="submit" class="w-full bg-teal-500 py-3 text-center text-white" value="Register">
            </form> 
          </div>
        </div>
      </div>
</template>