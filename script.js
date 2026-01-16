
        const views = {
            dash: `
                <h2>Dashboard</h2>
                <div class="card">
                    <button class="btn btn-primary" onclick="openModal('deploy')">+ Deploy Node</button>
                    <table class="nexus-table" style="margin-top: 20px;">
                        <tr><td>Node_Key</td><td>Zone</td><td>Status</td></tr>
                        <tr><td>ALPHA-01</td><td>US-East</td><td style="color: #013821ff">Online</td></tr>
                    </table>
                </div>
            `,
            nodes: `<h1>Clusters</h1><div class="card"><button class="btn btn-primary" onclick="openModal('export')">Report</button></div>`,
            audit: `<h1>Security</h1><div class="card"><button class="btn btn-primary" onclick="openModal('access')">Request Token</button></div>
                    <div class="card"><button class="btn btn-primary" onclick="openModal('service')">Create Service Account</button></div>`
        };

        function route(v, e) {
            document.getElementById('viewport').innerHTML = views[v];
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            if(e) e.target.classList.add('active');
        }

        function openModal(id) {
            document.getElementById(`modal-${id}`).style.display = 'flex';
        }

        function closeAll() {
            document.querySelectorAll('.modal-overlay').forEach(m => m.style.display = 'none');
        }

        function showStep(prefix, s) {
            document.querySelectorAll('.step-panel').forEach(p => p.classList.remove('active'));
            document.getElementById(`${prefix}-step-${s}`).classList.add('active');
        }

        function finish(proc) {
            alert(`${proc} Success`);
            closeAll();
        }

        function revealPhantom() {
            document.getElementById('phantom-modal').style.display='flex';
            console.log("[NEXUS] Hidden Transmission Activated");
        }

        function showStep(prefix, s) {
            document.querySelectorAll('.step-panel').forEach(p => p.classList.remove('active'));
            document.getElementById(`${prefix}-step-${s}`).classList.add('active');

            if(prefix === 'sa' && s === 3) {
                document.getElementById('sa-review-name').textContent = document.getElementById('sa-name').value || "(empty)";
                document.getElementById('sa-review-owner').textContent = document.getElementById('sa-owner').value || "(empty)";
                document.getElementById('sa-review-permission').textContent = document.getElementById('sa-permission').value;
            }
        }

        function openEgg() {
            console.log("This was way too easy. Let's see if you can find others.");
        }

        route('dash');
    