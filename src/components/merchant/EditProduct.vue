<template>
  <div class="insert-product">
    <Component :is="libs.BliHeader" title="Cart" :left-menu="leftMenu" no-shadow>
      <div slot="back">
        <BliIconArrowLeft />
      </div>
    </Component>
    <div class="forms">
      <template v-for="form in forms">

        <BliField v-if="form.type === 'text'" :key="form.name" type="dark" b-clearable :message="form.message">
          <BliInput v-model="values[form.key]" />
          <label>
            {{form.name}}
          </label>
        </BliField>

        <BliDropdown
          v-else-if="form.type === 'dropdown'"
          v-model="values[form.key]"
          :key="form.name"
          selection
          autoclose
        >
          <label slot="label">
            {{ form.name }}
          </label>
          <BliList scrollable>
            <BliListItem v-for="item in form.items" :key="item.value" :value="item.value">
              {{item.label}}
            </BliListItem>
          </BliList>
        </BliDropdown>

        <div class="switch" v-else-if="form.type === 'switch'" :key="form.key">
          <BliSwitch @input="handleSwitch(form.key, $event)" :value="values[form.key]">
            {{ form.name }}
          </BliSwitch>

          <BliList
            v-if="values[form.key]"
            multiselect checkbox-left
            @selectItem="handleItemSelect(form.scoreKey, form.fields, $event)"
          >
            <BliListItem
              v-for="(field, n) in form.fields"
              :value="field.key"
              :key="field.key"
              :desc-text="field.text"
            >
              pertanyaan ke {{ n + 1 }}
            </BliListItem>
          </BliList>

          <progress-bar v-if="values[form.key]" :max="form.max" :current="values[form.scoreKey] || 0" />
        </div>
      </template>
    </div>

    <BliModal
      type="success"
      :bli-active.sync="visibleModal"
      @close="closeModal"
    >
      <BliModalHeader>Sukses masukan produk</BliModalHeader>
      <BliModalBody>Produk yang anda masukkan sukses dan akan menunggu proses review.</BliModalBody>
    </BliModal>

    <div class="submit">
       <BliButton @click="visibleModal = true" color="secondary" block :disabled="Object.keys(values).length < 4">
         Submit
       </BliButton>
    </div>
  </div>
</template>

<script src="./js/edit-product.js"></script>

<style lang="scss" scoped>
.insert-product {
  max-width: 600px;
  text-align: left;
  margin: 16px;
  position: relative;
  min-height: 100vh;
  @media screen and(min-width: 600px) {
    margin: 16px auto;
  }
  .forms {
    padding-bottom: 80px;
  }
  .switch {
    margin-top: 16px;
  }
  .submit {
    width: 100%;
    position: absolute;
    bottom: 0;
    margin-bottom: 16px;
  }
} 
</style>