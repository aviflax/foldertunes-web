async function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form));

    try {
        const reqObj = {
            emailAddress: data.emailAddress,
            emailsAllowedPerYear: Number(data.emailsAllowedPerYear),
        };
        
        const res = await fetch(form.action, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reqObj),
        });

        if (res.status === 202) {
            // success
        } else if (res.status === 409) {
            // already registered
        } else {
            // error
        }
    } catch (err) {
        console.error(err);
    }
}
