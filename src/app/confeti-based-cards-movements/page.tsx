"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confeti from "../../../public/pics/Confeti.gif";
import Image from "next/image";

// Mock initial data
const initialStudents = [
  { id: "1", name: "Alice Johnson", score: 85 },
  { id: "2", name: "Bob Smith", score: 82 },
  { id: "3", name: "Charlie Brown", score: 78 },
  { id: "4", name: "David Wilson", score: 75 },
  { id: "5", name: "Eva Martinez", score: 73 },
  { id: "6", name: "Frank Zhang", score: 70 },
  { id: "7", name: "Grace Lee", score: 68 },
  { id: "8", name: "Henry Davis", score: 65 },
];

const MockWebSocketLeaderboard = () => {
  const [students, setStudents] = useState(initialStudents);
  const [prevPositions, setPrevPositions] = useState<{ [key: string]: number }>(
    {}
  );
  const [showConfetti, setShowConfetti] = useState(false);
  const [celebrateStudent, setCelebrateStudent] = useState<string | null>(null);

  // Simulate WebSocket updates
  useEffect(() => {
    const simulateScoreUpdate = () => {
      setStudents((currentStudents) => {
        // Randomly select a student to update
        const randomIndex = Math.floor(Math.random() * currentStudents.length);

        // Create a new array with the updated score
        const newStudents = currentStudents.map((student, index) => {
          if (index === randomIndex) {
            // Randomly increase score by 1-5 points
            const scoreIncrease = Math.floor(Math.random() * 5) + 1;
            return {
              ...student,
              score: student.score + scoreIncrease,
            };
          }
          return student;
        });

        // Sort by score in descending order
        return newStudents.sort((a, b) => b.score - a.score);
      });
    };

    // Simulate updates every 2 seconds
    const interval = setInterval(simulateScoreUpdate, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Track position changes
    const newPositions: { [key: string]: number } = {};
    students.forEach((student, index) => {
      const prevPosition = prevPositions[student.id] || index;
      newPositions[student.id] = index;
      // Only show confetti when:
      // 1. Student moves INTO top 3 from a lower position, OR
      // 2. Student moves UP within top 3 positions
      if (
        (index < 3 && prevPosition >= 3) || // Moving into top 3
        (index < 3 && prevPosition < 3 && index < prevPosition) // Moving up within top 3
      ) {
        setShowConfetti(true);
        setCelebrateStudent(student.id);
        setTimeout(() => {
          setShowConfetti(false);
          setCelebrateStudent(null);
        }, 3000);
      }
    });
    setPrevPositions(newPositions);
  }, [students, prevPositions]);

  return (
    <div className="w-full max-w-[1600px] m-auto p-4  flex flex-wrap gap-4 ">
      <AnimatePresence>
        {students.map((student, index) => {
          const previousPosition = prevPositions[student.id] || index;
          const positionChange = previousPosition - index;

          return (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: celebrateStudent === student.id ? 1.05 : 1,
                transition: {
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                },
              }}
              exit={{ opacity: 0, y: 50 }}
              layout
              className={`
                 p-4 rounded-lg shadow-lg  border-[4px] border-solid
                ${
                  index < 3
                    ? "bg-gradient-to-r from-yellow-50 to-yellow-100  border-red-600  "
                    : "bg-white  "
                }
                ${
                  celebrateStudent === student.id
                    ? "ring-2 ring-yellow-400   "
                    : ""
                } ${
                celebrateStudent === student.id && index <= 3
                  ? " animate-to-and-fro  "
                  : ""
              }
              `}
            >
              <div className="flex items-center justify-between relative gap-2 w-[300px] h-[300px] ">
                {showConfetti && celebrateStudent === student.id && (
                  <div className="absolute top-0  inset-0 pointer-events-none">
                    <Image src={confeti} alt="" width={400} height={400} />
                  </div>
                )}
                <div className="flex items-center space-x-2">
                  <span
                    className={`
                    w-8 h-8 flex items-center justify-center rounded-full
                    ${
                      index === 0
                        ? "bg-yellow-400"
                        : index === 1
                        ? "bg-gray-300"
                        : index === 2
                        ? "bg-orange-400"
                        : "bg-gray-200"
                    }
                    text-white font-bold
                  `}
                  >
                    {index + 1}
                  </span>
                  <span className="font-medium text-black  ">
                    {student.name}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-red-600  ">
                    {student.score}
                  </span>
                  {positionChange > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-green-500"
                    >
                      ↑{positionChange}
                    </motion.span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default MockWebSocketLeaderboard;
