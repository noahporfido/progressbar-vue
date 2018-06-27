<template>
  <div class="progressbar-container">
    <p>{{name}}</p>
    <div class="progressbar">
      <transition>
        <div v-bind:style="{width: getWidth, 'background-color': color}" class="progressbar-progress">
          <p>{{progress}}</p>
        </div>
      </transition>
    </div>
  </div>
</template>
<script src="./Progressbar.js" />
<style src="./Progressbar.scss" lang="scss" />
