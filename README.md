  <h1>keap-js-client</h1>

  <p>
    <strong>Note: This library is currently under development.</strong>
  </p>

  <p>
    <strong>License: MIT</strong>
  </p>

  <h2>Description</h2>
  <p>
    keap-js-client allows you to interact with Infusionsoft's CRM REST API. It provides TypeScript interfaces and helper functions for a strongly-typed and easier way to work with the API.
  </p>

  <h2>Installation</h2>
  <code>
    npm install keap-js-client
  </code>

  <h2>Usage</h2>
  <p>First, you will need to set the API key:</p>
  <pre>
  <code>
    import { setApiKey } from 'keap-js-client';<br>
    setApiKey('Your-Keap-API-Key-Here');
  </code>
</pre>
  <p>Then, you can use the library to call functions:</p>
  <pre>
  <code>
    import { updateAccountProfile, AccountProfile } from 'keap-js-client';<br><br>
    const newAccountInfo: AccountProfile = {<br>
      // ... (populate with new data)<br>
    };<br><br>
    (async () => {<br>
      try {<br>
        const updatedProfile = await updateAccountProfile(newAccountInfo);<br>
        console.log(updatedProfile);<br>
      } catch (error) {<br>
        console.error(error);<br>
      }<br>
    })();
  </code>
</pre>
  <h2>Interfaces</h2>
  <p>This library provides TypeScript interfaces like <code>ContactAddress</code> and <code>AccountProfile</code> to help you maintain strong typing.</p>

  <h2>Contact</h2>
  <p>If you have any questions or suggestions, please feel free to reach out.</p>

</body>
