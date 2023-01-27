<template>
    <div>
        <div class="row">
            <h1>{{ msg }}</h1>
            <div class="col-3 offset-md-1">
            <canvas id="myChart" width="400" height="400"></canvas>
            </div>
            <div class="col-3 offset-md-1">
            <canvas id="chartBar" width="400" height="400"></canvas>
            </div>
        </div>
        <!-- <div>
            <div>
                <canvas id="chartBar" width="400" height="400"></canvas>
            </div>
        </div> -->
    </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  data() {
    return {
      msg: "Grafica de materiales",
      tm1: 0,
      tm2: 0,
      tm3: 0,
      editorials: 0,
    };
  },
  created() {
    this.$store.dispatch("getMaterials");
    this.materials;
  },

  computed: {
    materials() {
      return this.$store.getters.obtenerMaterials;
    },

    typeMaterial() {
      this.materials.forEach((material) => {
        if (material.type_material_id === 1) {
          this.tm1 = this.tm1 + 1;
        }
        if (material.type_material_id === 2) {
          this.tm2 = this.tm2 + 1;
        }
        if (material.type_material_id === 3) {
          this.tm3 = this.tm3 + 1;
        }
        console.log(this.materials);
      });
      return {
        tm1: this.tm1,
        tm2: this.tm2,
        tm3: this.tm3
        }
    }
    },
  mounted() {

    const ctx = document.getElementById("myChart");

    const myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["tipo material 1", "tipo material 2", "tipo material 3"],
        datasets: [
          {
            label: "# de materiales",
            data: [this.typeMaterial.tm1, this.typeMaterial.tm2, this.typeMaterial.tm3],
            backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
              // 'rgba(255, 206, 86, 0.2)',
              // 'rgba(75, 192, 192, 0.2)',
              // 'rgba(153, 102, 255, 0.2)',
              // 'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              // 'rgba(255, 206, 86, 1)',
              // 'rgba(75, 192, 192, 1)',
              // 'rgba(153, 102, 255, 1)',
              // 'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
    //   options: {
    //       scales: {
    //           y: {
    //               beginAtZero: true
    //           }
    //       }
    //   }
    });
    // console.log(this.tm1+"--");

    myChart;

    const bar = document.getElementById("chartBar");


    const chartBar = new Chart(bar, {
      type: "bar",
      data: {
        labels: ["tipo material 1", "tipo material 2", "tipo material 3"],
        datasets: [
          {
            label: "# de materiales",
            data: [this.typeMaterial.tm1, this.typeMaterial.tm2, this.typeMaterial.tm3],
            backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
              // 'rgba(255, 206, 86, 0.2)',
              // 'rgba(75, 192, 192, 0.2)',
              // 'rgba(153, 102, 255, 0.2)',
              // 'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              // 'rgba(255, 206, 86, 1)',
              // 'rgba(75, 192, 192, 1)',
              // 'rgba(153, 102, 255, 1)',
              // 'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
    });
    // console.log(this.tm1+"--");

    chartBar;
  },
};
</script>
