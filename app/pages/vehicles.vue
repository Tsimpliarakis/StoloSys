<template>
  <div class="p-6 h-screen flex flex-col">
    <h1 class="text-3xl font-bold mb-4 flex-shrink-0">Vehicles</h1>

    <div v-if="loading" class="text-gray-500">Loading...</div>
    <div v-if="error" class="text-red-500">{{ error }}</div>

    <div v-if="vehicles.length" class="flex-1 overflow-auto border border-gray-300 rounded">
      <table class="min-w-full border-collapse">
        <thead class="bg-gray-100 dark:bg-gray-700 sticky top-0">
          <tr>
            <th class="border px-4 py-2">Make</th>
            <th class="border px-4 py-2">Model</th>
            <th class="border px-4 py-2">Year</th>
            <th class="border px-4 py-2">License Plate</th>
            <th class="border px-4 py-2">VIN</th>
            <th class="border px-4 py-2">Status</th>
            <th class="border px-4 py-2">Mileage</th>
            <th class="border px-4 py-2">Depreciation Rate</th>
            <th class="border px-4 py-2">Location ID</th>
            <th class="border px-4 py-2">Fuel Card ID</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="vehicle in vehicles"
            :key="vehicle.vehicle_id"
            class="hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
            @click="goToVehicle(vehicle.vehicle_id)"
          >
            <td class="border px-4 py-2">{{ vehicle.make }}</td>
            <td class="border px-4 py-2">{{ vehicle.model }}</td>
            <td class="border px-4 py-2">{{ vehicle.year }}</td>
            <td class="border px-4 py-2">{{ vehicle.license_plate }}</td>
            <td class="border px-4 py-2">{{ vehicle.vin }}</td>
            <td class="border px-4 py-2">{{ vehicle.current_status }}</td>
            <td class="border px-4 py-2">{{ vehicle.mileage }}</td>
            <td class="border px-4 py-2">{{ vehicle.depreciation_rate }}%</td>
            <td class="border px-4 py-2">{{ vehicle.location_id }}</td>
            <td class="border px-4 py-2">{{ vehicle.fuel_card_id }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Vehicle {
  vehicle_id: number;
  make: string | null;
  model: string | null;
  year: number | null;
  license_plate: string | null;
  vin: string | null;
  current_status: string | null;
  mileage: number | null;
  depreciation_rate: number | null;
  location_id: number | null;
  fuel_card_id: number | null;
}

const vehicles = ref<Vehicle[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

async function fetchVehicles() {
  loading.value = true;
  error.value = null;

  const { data, error: supabaseError } = await useSupabaseClient()
    .from<Vehicle>('vehicle')
    .select('*');

  if (supabaseError) {
    error.value = supabaseError.message;
  } else {
    vehicles.value = data ?? [];
  }

  loading.value = false;
}

onMounted(fetchVehicles);

const router = useRouter();
function goToVehicle(id: number) {
  router.push(`/vehicles/${id}`);
}
</script>

<style scoped>
/* Sticky header styling is handled via Tailwind's sticky + top-0 */
</style>
