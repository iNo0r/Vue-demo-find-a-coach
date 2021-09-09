<template>
  <base-card>
    <h2>Find Your Coach</h2>
    <span class="filter-option">
      <!-- The Checkbox here is checked, so the user can  uncheck
         them to fileter the coaches -->
      <input type="checkbox" id="frontend" checked @change="setFilter" />
      <!-- "for"s role to check the checkbox if the label pressed   -->
      <label for="frontend">frontend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="backend" checked @change="setFilter" />
      <label for="backend">backend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="career" checked @change="setFilter" />
      <label for="career">career</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true
      }
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    }
  }
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
<!-- 
1- how to derive a value from a check box and checked value ? 
2- at assigning
object value to another instance why utilize ... instade of just noramlly
assiging it ?
   const updatedFilters = {
        ...this.filters
      };
      instead of 

    const updatedFilters = this.filters;

3- explain this code 
    let filters=  {
        frontend: true,
        backend: true,
        career: true
      };
      const inputId = 'backend';
      const isActive =false;
      const updatedFilters = {
        ...filters,
        [inputId]: isActive
      };
      filters = updatedFilters
-->
