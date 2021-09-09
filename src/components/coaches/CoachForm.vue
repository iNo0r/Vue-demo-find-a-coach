<template>
  <form>
    <div class="form-control">
      <label for="Firstname">Firstname</label>
      <input type="text" id="firstname" />
    </div>
    <div class="form-control">
      <label for="lastname">Lastname</label>
      <input type="text" id="lastname" />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea type="text" id="description"></textarea>
    </div>
    <div class="form-control">
      <label for="rate">Description</label>
      <input type="number" id="rate" />
    </div>
    <div class="form-control">
      <h3>Areas of Expertise</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input type="checkbox" id="backend" value="backend" />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input type="checkbox" id="career" value="career" />
        <label for="career">Career advisory</label>
      </div>
    </div>
    <base-button>Register</base-button>
  </form>
</template>

<style>
/*  
    Questions 

    1-  create a form 
    2-  why do we use id for input and "for" label ? 
    -so when clicking on label the input will be targeted
    3- do we write the label before an input or after in case of a check box ?


*/
</style>
