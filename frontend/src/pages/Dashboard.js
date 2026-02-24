import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }

    const fetchTasks = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/tasks",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTasks(data);
      } catch (error) {
        console.log("Error fetching tasks");
      }
    };

    const fetchProfile = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/user/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(data);
      } catch (error) {
        console.log("Error fetching profile");
      }
    };

    fetchTasks();
    fetchProfile();
  }, [token, navigate]);

  const addTask = async () => {
    if (!title) return;

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/tasks",
        { title },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTasks([data, ...tasks]);
      setTitle("");
    } catch (error) {
      console.log("Error adding task");
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/tasks/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  const toggleTask = async (id) => {
    try {
      const { data } = await axios.put(
        `http://localhost:5000/api/tasks/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTasks(
        tasks.map((task) =>
          task._id === id ? data : task
        )
      );
    } catch (error) {
      console.log("Error updating task");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg">

        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold">Task Dashboard 🚀</h1>
            <p className="text-sm text-gray-500">
              Logged in as: {user?.email}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-1 rounded-lg"
          >
            Logout
          </button>
        </div>

        {/* Add Task */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 border p-2 rounded-lg"
          />
          <button
            onClick={addTask}
            className="bg-blue-600 text-white px-4 rounded-lg"
          >
            Add
          </button>
        </div>

        {/* Search Task */}
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border p-2 rounded-lg mb-4"
        />

        {/* Task List */}
        {filteredTasks.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks found</p>
        ) : (
          filteredTasks.map((task) => (
            <div
              key={task._id}
              className="flex justify-between items-center bg-gray-50 p-3 rounded-lg mb-2"
            >
              <span
                onClick={() => toggleTask(task._id)}
                style={{
                  textDecoration: task.completed
                    ? "line-through"
                    : "none",
                  cursor: "pointer",
                }}
              >
                {task.title}
              </span>

              <button
                onClick={() => deleteTask(task._id)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;