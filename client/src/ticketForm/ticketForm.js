import React, { Component } from 'react';

class TicketForm extends Component {
  render() {
    return (
      <div>
        <form action="/api/tickets" method="POST">

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Priority</label>
            </div>
            <div class="field-body">
              <div class="field is-narrow">
                <div class="control">
                  <div class="select is-fullwidth">
                    <select name="priority">
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                      <option>Urgent</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Subject</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input class="input is-danger" type="text" placeholder="e.g. Update problem" name="subject"/>
                </div>
                <p class="help is-danger">
                  This field is required
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Question</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <textarea class="textarea" placeholder="Explain how we can help you" name="description"></textarea>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label">
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <button class="button is-primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default TicketForm;