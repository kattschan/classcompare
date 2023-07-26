<script>
	/** @type {import('./$types').ActionData} */
	export let form;
	console.log(form);
</script>

<h3>Welcome to Classcompare</h3>

<div class="round border padding">
	{#if !form}
		<form method="POST">
			<div class="field label border" id="coursediv">
				<input type="text" id="course" name="course" required />
				<label>Course Name</label>
				<span class="helper"
					>This <strong>must</strong> be copied straight from the inspect console</span
				>
			</div>
			<div class="field label border">
				<input type="text" id="name" name="name" required />
				<label>Firstname and Last Initial</label>
				<span class="helper">E.g. Kat T.</span>
			</div>
			<button>Submit</button>
		</form>
	{/if}

	{#if form}
		<h6>Results</h6>
		{#if form.classRows}
			{#each form.classRows as row}
				<div class="row">
					<span>{row.name}</span>
				</div>
			{/each}
		{/if}
		{#if !form.classRows}
			<div class="fill medium-height middle-align center-align">
				<div class="center-align">
					<i class="extra">error</i>
					<h5>Sorry! We couldn't find anyone in your class.</h5>
					<p>Come back soon to see if there are any matches.</p>
					<div class="space" />
				</div>
			</div>
		{/if}
	{/if}
</div>
<div class="row padding" width="100%">
	<div class="border round padding">
		<h6>Information(again)</h6>
		<ul>
			<li>At this time, only first period classes are available.</li>
			<li>Full schedules will come from the county by next Tuesday.</li>
			<li>
				Finally, the class that is returned in StudentVue right now has an about 90% chance of being
				your final class. Things shift.
      </li>
		</ul>
	</div>
  <div class="border round padding">
		<h6>How to get your First Period</h6>
		<ul>
			<li>Go to eClass and login to StudentVue</li>
			<li>Once the Class Schedule page finishes loading, open <a href="https://ga-gcps-psv.edupoint.com/PXP2_Gradebook.aspx?AGU=0">this link</a></li>
			<li>
				Open developer tools(right click -> inspect element, control shift i on Windows, or command option i on Mac)
      </li>
      <li>Refresh and look for the block that says S1 with a className(Note that it may say object, just click on all of the objects until the class shows up.)</li>
		</ul>
	</div>
</div>
