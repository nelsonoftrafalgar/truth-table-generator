export const getLayout = (input: string) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Truth Table Generator</title>
      <style>
        table {
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }

        td,
        th {
          border: 1px solid #5a5a5a;
          text-align: left;
          padding: 8px;
        }

        th {
          font-weight: 600;
        }

        .false {
          color: #d84747;
        }

        .true-row {
          background-color: #173a1b
        }

        .true {
          color: #4cad58;
        }

        .false-row {
          background-color: #542929
        }
      </style>
    </head>
    <body>
      <table id="table">
        <tr id="header"></tr>
      </table>
      <script>
        const hydrateTable = (data) => {
          const header = document.querySelector("#header");
          const table = document.querySelector("#table");

          Object.keys(data[0]).forEach((key) => {
            const th = document.createElement("th");
            th.innerText = key;
            header.appendChild(th);
          });

          data.forEach((item) => {
            const tr = document.createElement("tr");
            Object.values(item).forEach((value) => {
              const td = document.createElement("td");
              td.innerText = value;
              td.classList.add(value.toString());
              tr.appendChild(td);
            });
            tr.classList.add(tr.firstElementChild.className + '-row')
            table.appendChild(tr);
          });
        };

        hydrateTable(${input});
      </script>
    </body>
  </html>`;
}