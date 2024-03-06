<template>
  <section id="contact" class="contact-us gray-light-bg ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-12 pb-3 message-box d-none">
          <div class="alert alert-danger"></div>
        </div>
        <div class="col-md-5">
          <div class="section-heading">
            <h2>Contact Us</h2>
            <p>
              It's very easy to get in touch with us. Just use the contact form or via any of the contact information
              provided below.
            </p>
          </div>
          <div class="footer-address">
            <h6><strong>Head Office</strong></h6>
            <p>Nigeria</p>
            <ul>
              <li><span>Phone: +00 0 0000 0000</span></li>
              <li>
                <span>Email : <a href="mailto:support@eazee.com.ng">support@eazee.com.ng</a></span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-7">
          <form action="form.php" method="POST" id="contactForm" class="contact-us-form" novalidate="novalidate">
            <h5>Talk to Us</h5>
            <div class="row">
              <div class="col-sm-6 col-12">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    id="name"
                    placeholder="Enter name"
                    required="required"
                  />
                </div>
              </div>
              <div class="col-sm-6 col-12">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                    required="required"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6 col-12">
                <div class="form-group">
                  <input type="text" name="phone" value="" class="form-control" id="phone" placeholder="Your Phone" />
                </div>
              </div>
              <div class="col-sm-6 col-12">
                <div class="form-group">
                  <input type="text" name="subject" value="" class="form-control" id="company" placeholder="Subject" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <textarea
                    name="message"
                    id="message"
                    class="form-control"
                    rows="7"
                    cols="25"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 mt-3">
                <button type="submit" class="btn solid-btn" id="btnContactUs">Send Message</button>
              </div>
            </div>
          </form>
          <p class="form-message"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "contact-component",
});
</script>

<style></style>
