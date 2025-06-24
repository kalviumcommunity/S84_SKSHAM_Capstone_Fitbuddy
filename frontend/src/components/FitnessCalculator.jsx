
import { useState } from "react"

export default function FitnessCalculator() {
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    height: "",
    weight: "",
    activityLevel: "",
    goal: "",
  })

  const [results, setResults] = useState(null)

  const activityMultipliers = {
    sedentary: 1.2,
    lightly: 1.375,
    active: 1.55,
    very: 1.725,
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const calculateBMR = (gender, weight, height, age) => {
    if (gender === "male") {
      return 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age
    } else {
      return 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age
    }
  }

  const calculateMacros = (calories, goal) => {
    let proteinRatio, carbRatio, fatRatio

    switch (goal) {
      case "fat-loss":
        proteinRatio = 0.35
        carbRatio = 0.3
        fatRatio = 0.35
        break
      case "muscle-gain":
        proteinRatio = 0.3
        carbRatio = 0.45
        fatRatio = 0.25
        break
      case "maintenance":
      default:
        proteinRatio = 0.25
        carbRatio = 0.45
        fatRatio = 0.3
        break
    }

    return {
      protein: Math.round((calories * proteinRatio) / 4),
      carbs: Math.round((calories * carbRatio) / 4),
      fats: Math.round((calories * fatRatio) / 9),
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { gender, age, height, weight, activityLevel, goal } = formData

    if (!gender || !age || !height || !weight || !activityLevel || !goal) {
      alert("Please fill in all fields")
      return
    }

    const bmr = calculateBMR(gender, parseFloat(weight), parseFloat(height), parseInt(age))
    const tdee = bmr * activityMultipliers[activityLevel]

    let dailyCalories
    switch (goal) {
      case "fat-loss":
        dailyCalories = Math.round(tdee * 0.85)
        break
      case "muscle-gain":
        dailyCalories = Math.round(tdee * 1.15)
        break
      case "maintenance":
      default:
        dailyCalories = Math.round(tdee)
        break
    }

    const macros = calculateMacros(dailyCalories, goal)

    setResults({
      dailyCalories,
      ...macros,
    })
  }

  const resetForm = () => {
    setFormData({
      gender: "",
      age: "",
      height: "",
      weight: "",
      activityLevel: "",
      goal: "",
    })
    setResults(null)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-400 mb-2">Fitness Calorie Calculator</h1>
          <p className="text-gray-400">Calculate your daily calorie and macro requirements</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-gray-900 rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 text-green-300">Your Information</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Gender */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Age (years)</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  min="15"
                  max="100"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your age"
                />
              </div>

              {/* Height */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Height (cm)</label>
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  min="100"
                  max="250"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your height"
                />
              </div>

              {/* Weight */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Weight (kg)</label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  min="30"
                  max="300"
                  step="0.1"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your weight"
                />
              </div>

              {/* Activity Level */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Activity Level</label>
                <select
                  name="activityLevel"
                  value={formData.activityLevel}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select Activity Level</option>
                  <option value="sedentary">Sedentary (little/no exercise)</option>
                  <option value="lightly">Lightly Active (1–3 days/week)</option>
                  <option value="active">Active (3–5 days/week)</option>
                  <option value="very">Very Active (6–7 days/week)</option>
                </select>
              </div>

              {/* Goal */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Goal</label>
                <select
                  name="goal"
                  value={formData.goal}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select Your Goal</option>
                  <option value="fat-loss">Fat Loss</option>
                  <option value="muscle-gain">Muscle Gain</option>
                  <option value="maintenance">Maintenance</option>
                </select>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
                >
                  Calculate
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>

          {/* Results Section */}
          <div className="bg-gray-900 rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 text-green-300">Your Results</h2>

            {results ? (
              <div className="space-y-6">
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <h3 className="text-lg font-medium text-gray-300 mb-2">Daily Calories</h3>
                  <p className="text-3xl font-bold text-green-400">{results.dailyCalories}</p>
                  <p className="text-sm text-gray-400">calories per day</p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-800 rounded-lg p-4 text-center">
                    <h4 className="text-sm text-gray-300">Protein</h4>
                    <p className="text-xl font-bold text-green-400">{results.protein}g</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 text-center">
                    <h4 className="text-sm text-gray-300">Carbs</h4>
                    <p className="text-xl font-bold text-yellow-400">{results.carbs}g</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 text-center">
                    <h4 className="text-sm text-gray-300">Fats</h4>
                    <p className="text-xl font-bold text-red-400">{results.fats}g</p>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-lg font-medium mb-2">Goal Summary</h4>
                  <div className="text-sm text-gray-300 space-y-1">
                    {formData.goal === "fat-loss" && <p>• 15% calorie deficit for fat loss</p>}
                    {formData.goal === "muscle-gain" && <p>• 15% calorie surplus for muscle gain</p>}
                    {formData.goal === "maintenance" && <p>• Maintain your current weight</p>}
                    <p>• Drink plenty of water</p>
                    <p>• Track your progress weekly</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-400 py-12">
                <div className="text-6xl mb-4">🏋️</div>
                <p className="text-lg">Fill out the form to see your personalized results</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-10 text-gray-500 text-sm">
          <p>
            * Results are estimates based on standard formulas. Consult a healthcare professional for personalized
            advice.
          </p>
        </div>
      </div>
    </div>
  )
}
