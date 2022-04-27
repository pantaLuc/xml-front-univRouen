import React from 'react'

export default function Banner() {
  return (
    <>
<div class="flex justify-center pt-4 m-12">
    <div class="max-w-3xl  text-center">
      <h1 class="text-3xl font-extrabold sm:text-5xl">
      Service REST  &  Client
        <strong class="font-extrabold text-red-700 sm:block">
        Version : V1.0
        </strong>
      </h1>

      <p class="mt-4 sm:leading-relaxed sm:text-xl">
      Déployer un service REST permettant de gérer les flux RSS22 conformes à la description définie
lors du TP n°1
      </p>
    </div>
  </div>
    </>
  )
}
